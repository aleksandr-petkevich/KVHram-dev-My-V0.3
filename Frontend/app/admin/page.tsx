'use client';

import { useEffect, useState } from 'react';
import { Layout, Button, Table, Modal, Form, Input, InputNumber, Select, DatePicker, TimePicker, message, Space, Card, Row, Col, Popover, Typography, Tag, Checkbox } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined, ReloadOutlined, LogoutOutlined } from '@ant-design/icons';
import { apiClient, Event } from '@/lib/api';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';
import 'dayjs/locale/ru';
import ruRU from 'antd/locale/ru_RU';
import { ConfigProvider } from 'antd';

dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.locale('ru');

const { Header, Content } = Layout;
const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const COLORS = [
  { name: 'Черный', value: '#000000' },
  { name: 'Темно-желтый', value: '#D4AF37' },
  { name: 'Голубой', value: '#87CEEB' },
  { name: 'Синий', value: '#0000FF' },
  { name: 'Фиолетовый', value: '#800080' },
  { name: 'Зеленый', value: '#008000' },
  { name: 'Красный', value: '#FF0000' },
  { name: 'Бордовый', value: '#800020' },
];

const WORSHIP_SERVICES = [
  '9 час.',
  'Вечерня.',
  'Утреня.',
  'Полиелей.',
  'Всенощное бдение',
  'Всенощное бдение (лития)',
  '1 час.',
  'Часы',
  'Литургия.',
  'Молебен.',
  'Панихида',
  'Акафист Честному и Животворящему Кресту Господню.',
  'Акафист Пресвятой Богородице пред иконой Ея «Всецарица»',
  'Акафист святителю Спиридону',
  'Акафист святителю Николаю',
];

const STATUS_OPTIONS = [
  { value: 'new', label: 'Новая', color: 'blue' },
  { value: 'in_progress', label: 'В процессе', color: 'orange' },
  { value: 'agreed', label: 'Согласована', color: 'green' },
  { value: 'done', label: 'Завершена', color: 'default' },
];

const PRIORITY_OPTIONS = [
  { value: 'low', label: 'Низкий', color: 'default' },
  { value: 'normal', label: 'Обычный', color: 'blue' },
  { value: 'high', label: 'Высокий', color: 'red' },
];

export default function AdminPage() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [form] = Form.useForm();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState<{
    status: string | undefined;
    priority: string | undefined;
    searchDate: string | undefined;
    searchTitle: string | undefined;
  }>({
    status: undefined,
    priority: undefined,
    searchDate: undefined,
    searchTitle: undefined,
  });
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formDate, setFormDate] = useState<dayjs.Dayjs | null>(null);
  const [customServices, setCustomServices] = useState<string[]>([]);
  const [newCustomService, setNewCustomService] = useState('');
  const [hasEveService, setHasEveService] = useState(false);
  const [eveFormDate, setEveFormDate] = useState<dayjs.Dayjs | null>(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<string | null>(null);

  useEffect(() => {
    const token = apiClient.getToken();
    if (!token) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await apiClient.getEvents({
        page,
        limit: pageSize,
        ...filters,
        sortBy,
        sortOrder,
      });
      setEvents(response.events);
      setTotal(response.total);
    } catch (error) {
      message.error('Ошибка загрузки событий');
      if (error instanceof Error && error.message.includes('401')) {
        router.push('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchEvents();
    }
  }, [page, pageSize, filters, sortBy, sortOrder, isAuthenticated]);

  const handleCreate = () => {
    setEditingEvent(null);
    form.resetFields();
    setModalVisible(true);
  };

  const handleEdit = (record: Event) => {
    setEditingEvent(record);
    form.setFieldsValue({
      ...record,
      date: record.date ? dayjs(record.date) : undefined,
      time: record.time ? dayjs(record.time, 'HH:mm') : undefined,
    });
    setModalVisible(true);
  };

  const handleDeleteClick = (id: string) => {
    setEventToDelete(id);
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirm = async () => {
    if (eventToDelete) {
      try {
        // Optimistically remove from local state immediately
        setEvents(events.filter(event => event._id !== eventToDelete));
        setTotal(prev => prev - 1);

        // Then update from server
        await apiClient.deleteEvent(eventToDelete);
        message.success('Событие удалено');

        // Refresh the list to ensure consistency
        await fetchEvents();
      } catch (error) {
        message.error('Ошибка удаления события');
        // On error, refresh to restore correct state
        fetchEvents();
      } finally {
        // Always close the modal and reset state
        setDeleteModalVisible(false);
        setEventToDelete(null);
      }
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
    setEventToDelete(null);
  };

  const handleSubmit = async (values: any) => {
    try {
      if (editingEvent) {
        // Update existing event
        const eventData = {
          ...values,
          date: values.date ? values.date.toISOString() : undefined,
          time: values.time ? values.time.format('HH:mm') : undefined,
        };
        await apiClient.updateEvent(editingEvent._id, eventData);
        message.success('Событие обновлено');
      } else {
        // Create main event
        const mainEventData = {
          ...values,
          date: values.date ? values.date.toISOString() : undefined,
          time: values.time ? values.time.format('HH:mm') : undefined,
        };
        await apiClient.createEvent(mainEventData);
        message.success('Событие создано');

        // Create eve event if checkbox is checked
        if (hasEveService && values.eve_date && values.eve_time && values.eve_title) {
          const eveEventData = {
            title: values.eve_title,
            titleColor: values.eve_titleColor,
            additional_title: values.eve_additional_title,
            additionalTitleColor: values.additionalTitleColor,
            date: values.eve_date.toISOString(),
            time: values.eve_time.format('HH:mm'),
            status: values.eve_status,
            priority: values.eve_priority,
            description: values.eve_description,
            descriptionColor: values.eve_descriptionColor,
          };
          await apiClient.createEvent(eveEventData);
          message.success('Богослужение накануне создано');
        }
      }
      setModalVisible(false);
      fetchEvents();
    } catch (error) {
      message.error('Ошибка сохранения события');
    }
  };

  const handleDateSelect = (date: dayjs.Dayjs) => {
    setSelectedDate(date);
  };

  const handleFormDateChange = (date: dayjs.Dayjs) => {
    setFormDate(date);
  };

  const getWeekDates = () => {
    if (!selectedDate) return [];
    const startOfWeek = selectedDate.startOf('week');
    const dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(startOfWeek.add(i, 'day'));
    }
    return dates;
  };

  const getEventsForDate = (date: dayjs.Dayjs) => {
    const dateStr = date.format('YYYY-MM-DD');
    return events.filter(event => event.date && event.date.startsWith(dateStr));
  };

  const columns = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => date ? dayjs(date).format('DD.MM.YYYY') : '-',
      sorter: true,
    },
    {
      title: 'Время',
      dataIndex: 'time',
      key: 'time',
      render: (time: string) => time || '-',
    },
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: Event) => {
        const sortWorshipServices = (services: string[]): string[] => {
          if (!services || services.length === 0) return [];

          return services.sort((a, b) => {
            const indexA = WORSHIP_SERVICES.indexOf(a);
            const indexB = WORSHIP_SERVICES.indexOf(b);

            if (indexA >= 0 && indexB >= 0) {
              return indexA - indexB;
            } else if (indexA >= 0) {
              return -1;
            } else if (indexB >= 0) {
              return 1;
            } else {
              return services.indexOf(a) - services.indexOf(b);
            }
          });
        };

        const formatServices = (services: string[]): string => {
          if (!services || services.length === 0) return '';
          const sorted = sortWorshipServices(services);
          return sorted.join('. ') + '.';
        };

        return (
          <div>
            <div style={{ color: record.titleColor || 'inherit', fontWeight: 500 }}>{text}</div>
            {record.additional_title && record.additional_title.length > 0 && (
              <div style={{ color: record.additionalTitleColor || 'inherit', fontSize: '12px' }}>
                {formatServices(record.additional_title)}
              </div>
            )}
          </div>
        );
      },
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const option = STATUS_OPTIONS.find(s => s.value === status);
        return <span style={{ color: option?.color === 'default' ? 'inherit' : option?.color }}>{option?.label}</span>;
      },
    },
    {
      title: 'Приоритет',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => {
        const option = PRIORITY_OPTIONS.find(p => p.value === priority);
        return <span style={{ color: option?.color === 'default' ? 'inherit' : option?.color }}>{option?.label}</span>;
      },
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (_: any, record: Event) => (
        <Space>
          <Button icon={<EditOutlined />} size="small" onClick={() => handleEdit(record)} />
          <Button icon={<DeleteOutlined />} size="small" danger onClick={() => handleDeleteClick(record._id)} />
        </Space>
      ),
    },
  ];

  const weekDates = getWeekDates();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <ConfigProvider locale={ruRU}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: '#fff', padding: '0 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
            <Title level={3} style={{ margin: 0 }}>Админ панель - Расписание</Title>
            <Space>
              <Button icon={<ReloadOutlined />} onClick={fetchEvents}>Обновить</Button>
              <Button type="primary" icon={<PlusOutlined />} onClick={handleCreate}>Создать событие</Button>
              <Button icon={<LogoutOutlined />} onClick={() => { apiClient.clearToken(); router.push('/login'); }}>Выйти</Button>
            </Space>
          </div>
        </Header>

        <Content style={{ padding: '24px', background: '#f0f2f5' }}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="Календарь на неделю" size="small">
                <DatePicker
                  format="DD.MM.YYYY"
                  onChange={(date) => handleDateSelect(date!)}
                  style={{ marginBottom: '16px' }}
                  placeholder="Выберите дату"
                />
                {weekDates.length > 0 && (
                  <Row gutter={[8, 8]}>
                    {weekDates.map((date, index) => {
                      const dayEvents = getEventsForDate(date);
                      const isSelected = selectedDate && date.isSame(selectedDate, 'day');
                      return (
                        <Col span={24 / 7} key={index}>
                          <Card
                            size="small"
                            style={{
                              background: isSelected ? '#e6f7ff' : '#fff',
                              border: isSelected ? '2px solid #1890ff' : '1px solid #d9d9d9',
                              minHeight: '120px'
                            }}
                            title={
                              <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '12px', color: '#666' }}>
                                  {date.format('ddd')}
                                </div>
                                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                  {date.format('DD')}
                                </div>
                              </div>
                            }
                          >
                            {dayEvents.length > 0 ? (
                              dayEvents.map(event => (
                                <div
                                  key={event._id}
                                  style={{
                                    padding: '4px',
                                    margin: '2px 0',
                                    background: event.titleColor || '#1890ff',
                                    color: '#fff',
                                    borderRadius: '4px',
                                    fontSize: '11px',
                                    cursor: 'pointer'
                                  }}
                                  onClick={() => handleEdit(event)}
                                >
                                  <div>{event.title}</div>
                                  {event.time && (
                                    <div style={{ fontSize: '10px', opacity: 0.9 }}>
                                      {event.time}
                                    </div>
                                  )}
                                </div>
                              ))
                            ) : (
                              <div style={{ textAlign: 'center', color: '#999', fontSize: '12px', padding: '8px' }}>
                                Нет событий
                              </div>
                            )}
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                )}
                {selectedDate && (
                  <Card size="small" style={{ marginTop: '16px', background: '#fafafa' }}>
                    <Title level={5}>
                      {selectedDate.format('DD.MM.YYYY')} - Богослужение
                    </Title>
                    <iframe
                      src={`https://www.patriarchia.ru/bu/${selectedDate.format('YYYY-MM-DD')}`}
                      style={{ width: '100%', height: '400px', border: '1px solid #d9d9d9', borderRadius: '4px' }}
                      title="Богослужение"
                    />
                  </Card>
                )}
              </Card>
            </Col>

            <Col span={24}>
              <Card
                title="Список событий"
                size="small"
                extra={
                  <Space wrap>
                    <Input
                      placeholder="Поиск по названию"
                      prefix={<SearchOutlined />}
                      style={{ width: 200 }}
                      onChange={(e) => setFilters({ ...filters, searchTitle: e.target.value || '' })}
                    />
                    <Input
                      placeholder="Дата (YYYY-MM-DD)"
                      style={{ width: 150 }}
                      onChange={(e) => setFilters({ ...filters, searchDate: e.target.value || '' })}
                    />
                    <Select
                      placeholder="Статус"
                      style={{ width: 150 }}
                      allowClear
                      onChange={(value) => setFilters({ ...filters, status: value })}
                    >
                      {STATUS_OPTIONS.map(option => (
                        <Option key={option.value} value={option.value}>{option.label}</Option>
                      ))}
                    </Select>
                    <Select
                      placeholder="Приоритет"
                      style={{ width: 150 }}
                      allowClear
                      onChange={(value) => setFilters({ ...filters, priority: value })}
                    >
                      {PRIORITY_OPTIONS.map(option => (
                        <Option key={option.value} value={option.value}>{option.label}</Option>
                      ))}
                    </Select>
                    <Select
                      placeholder="Сортировка"
                      style={{ width: 150 }}
                      value={`${sortBy}_${sortOrder}`}
                      onChange={(value) => {
                        const [field, order] = value.split('_');
                        setSortBy(field);
                        setSortOrder(order as 'asc' | 'desc');
                      }}
                    >
                      <Option value="created_at_desc">Дата создания (новые)</Option>
                      <Option value="created_at_asc">Дата создания (старые)</Option>
                      <Option value="date_asc">Дата события (по возрастанию)</Option>
                      <Option value="date_desc">Дата события (по убыванию)</Option>
                      <Option value="status_asc">Статус (А-Я)</Option>
                      <Option value="status_desc">Статус (Я-А)</Option>
                    </Select>
                  </Space>
                }
              >
                <Table
                  columns={columns}
                  dataSource={events}
                  rowKey="_id"
                  loading={loading}
                  pagination={{
                    current: page,
                    pageSize: pageSize,
                    total: total,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    showTotal: (total) => `Всего: ${total}`,
                    onChange: (newPage, newPageSize) => {
                      setPage(newPage);
                      setPageSize(newPageSize);
                    },
                  }}
                  onChange={(pagination, filters, sorter) => {
                    setPage(pagination.current || 1);
                    setPageSize(pagination.pageSize || 10);
                    if (sorter && !Array.isArray(sorter) && sorter.field) {
                      setSortBy(sorter.field as string);
                      setSortOrder(sorter.order as 'asc' | 'desc');
                    }
                  }}
                />
              </Card>
            </Col>
          </Row>
        </Content>

        <Modal
          title={editingEvent ? 'Редактировать событие' : 'Создать событие'}
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
          width={800}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="date"
                  label="Дата"
                  rules={[{ required: true, message: 'Пожалуйста, выберите дату' }]}
                >
                  <DatePicker
                    style={{ width: '100%' }}
                    format="YYYY-MM-DD"
                    onChange={(date) => handleFormDateChange(date!)}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="time"
                  label="Время"
                  rules={[
                    {
                      required: true,
                      message: 'Время не заполнено. Рекомендуется указать время для события.',
                      warningOnly: true,
                    }
                  ]}
                >
                  <TimePicker
                    style={{ width: '100%' }}
                    format="HH:mm"
                    placeholder="Выберите время"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="status"
                  label="Статус"
                  rules={[{ required: true, message: 'Пожалуйста, выберите статус' }]}
                  initialValue="new"
                >
                  <Select>
                    {STATUS_OPTIONS.map(option => (
                      <Option key={option.value} value={option.value}>{option.label}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="priority"
                  label="Приоритет"
                  rules={[{ required: true, message: 'Пожалуйста, выберите приоритет' }]}
                  initialValue="normal"
                >
                  <Select>
                    {PRIORITY_OPTIONS.map(option => (
                      <Option key={option.value} value={option.value}>{option.label}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            {formDate && (
              <Card size="small" style={{ marginBottom: '16px', background: '#fafafa' }}>
                <Title level={5}>
                  {formDate.format('DD.MM.YYYY')} - Богослужение
                </Title>
                <iframe
                  src={`https://www.patriarchia.ru/bu/${formDate.format('YYYY-MM-DD')}`}
                  style={{ width: '100%', height: '400px', border: '1px solid #d9d9d9', borderRadius: '4px' }}
                  title="Богослужение"
                />
              </Card>
            )}

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="title"
                  label="Название"
                  rules={[
                    { required: true, message: 'Пожалуйста, введите название' },
                    { min: 3, message: 'Минимум 3 символа' },
                    { max: 100, message: 'Максимум 100 символов' }
                  ]}
                >
                  <Input placeholder="Название события" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="titleColor"
                  label="Цвет названия"
                >
                  <Select placeholder="Выберите цвет" allowClear>
                    {COLORS.map(color => (
                      <Option key={color.value} value={color.value}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '20px', height: '20px', background: color.value, border: '1px solid #d9d9d9', borderRadius: '4px' }} />
                          {color.name}
                        </div>
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="additional_title"
                  label="Богослужение"
                >
                  <Select
                    mode="multiple"
                    placeholder="Выберите богослужения"
                    style={{ width: '100%' }}
                    options={[...WORSHIP_SERVICES, ...customServices].map(service => ({
                      value: service,
                      label: service,
                    }))}
                    tagRender={(props) => {
                      const { label, value, closable, onClose } = props;
                      const index = WORSHIP_SERVICES.indexOf(value);
                      const customIndex = customServices.indexOf(value);
                      const order = index >= 0 ? index : WORSHIP_SERVICES.length + customIndex;

                      return (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '2px 8px',
                            margin: '2px',
                            background: '#f0f0f0',
                            border: '1px solid #d9d9d9',
                            borderRadius: '4px',
                            fontSize: '12px',
                          }}
                        >
                          <span style={{ marginRight: '4px', color: '#999', fontSize: '10px' }}>
                            {order + 1}.
                          </span>
                          {label}
                          {closable && (
                            <span
                              onClick={onClose}
                              style={{
                                marginLeft: '4px',
                                cursor: 'pointer',
                                color: '#999',
                              }}
                            >
                              ×
                            </span>
                          )}
                        </span>
                      );
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
                    Добавить иное богослужение
                  </label>
                  <Space style={{ width: '100%' }}>
                    <Input
                      placeholder="Введите название богослужения"
                      value={newCustomService}
                      onChange={(e) => setNewCustomService(e.target.value)}
                      onPressEnter={() => {
                        if (newCustomService.trim() && !customServices.includes(newCustomService.trim())) {
                          setCustomServices([...customServices, newCustomService.trim()]);
                          setNewCustomService('');
                        }
                      }}
                      style={{ flex: 1 }}
                    />
                    <Button
                      type="primary"
                      onClick={() => {
                        if (newCustomService.trim() && !customServices.includes(newCustomService.trim())) {
                          setCustomServices([...customServices, newCustomService.trim()]);
                          setNewCustomService('');
                        }
                      }}
                    >
                      Добавить
                    </Button>
                  </Space>
                  {customServices.length > 0 && (
                    <div style={{ marginTop: '8px' }}>
                      <Text type="secondary" style={{ fontSize: '12px' }}>
                        Добавленные богослужения:
                      </Text>
                      <div style={{ marginTop: '4px' }}>
                        {customServices.map((service, index) => (
                          <Tag
                            key={index}
                            closable
                            onClose={() => {
                              setCustomServices(customServices.filter((_, i) => i !== index));
                            }}
                            style={{ margin: '2px' }}
                          >
                            {service}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="additionalTitleColor"
                  label="Цвет доп. названия"
                >
                  <Select placeholder="Выберите цвет" allowClear>
                    {COLORS.map(color => (
                      <Option key={color.value} value={color.value}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '20px', height: '20px', background: color.value, border: '1px solid #d9d9d9', borderRadius: '4px' }} />
                          {color.name}
                        </div>
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="description"
              label="Описание"
              rules={[{ max: 500, message: 'Максимум 500 символов' }]}
            >
              <TextArea rows={3} placeholder="Описание события" maxLength={500} showCount />
            </Form.Item>

            <Form.Item
              name="descriptionColor"
              label="Цвет описания"
            >
              <Select placeholder="Выберите цвет" allowClear>
                {COLORS.map(color => (
                  <Option key={color.value} value={color.value}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '20px', height: '20px', background: color.value, border: '1px solid #d9d9d9', borderRadius: '4px' }} />
                      {color.name}
                    </div>
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name="communicants"
                  label="Причастников"
                >
                  <InputNumber style={{ width: '100%' }} min={0} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="parishioners"
                  label="Прихожан"
                >
                  <InputNumber style={{ width: '100%' }} min={0} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="priority"
                  label="Приоритет"
                  rules={[{ required: true, message: 'Пожалуйста, выберите приоритет' }]}
                  initialValue="normal"
                >
                  <Select>
                    {PRIORITY_OPTIONS.map(option => (
                      <Option key={option.value} value={option.value}>{option.label}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="other"
              label="Прочее"
              rules={[{ max: 1000, message: 'Максимум 1000 символов' }]}
            >
              <TextArea rows={3} placeholder="Дополнительная информация" maxLength={1000} showCount />
            </Form.Item>

            <Form.Item
              name="otherColor"
              label="Цвет поля 'Прочее'"
            >
              <Select placeholder="Выберите цвет" allowClear>
                {COLORS.map(color => (
                  <Option key={color.value} value={color.value}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '20px', height: '20px', background: color.value, border: '1px solid #d9d9d9', borderRadius: '4px' }} />
                      {color.name}
                    </div>
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="hasEveService" valuePropName="checked">
              <Checkbox onChange={(e) => setHasEveService(e.target.checked)}>
                Богослужение накануне
              </Checkbox>
            </Form.Item>

            {hasEveService && (
              <Card
                size="small"
                style={{
                  marginBottom: '16px',
                  background: '#fafafa',
                  animation: 'fadeIn 0.3s ease-in'
                }}
              >
                <Title level={5} style={{ marginTop: 0, marginBottom: '16px' }}>
                  Богослужение накануне
                </Title>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="eve_date"
                      label="Дата"
                      rules={[{ required: hasEveService, message: 'Пожалуйста, выберите дату' }]}
                      initialValue={formDate ? formDate.subtract(1, 'day') : undefined}
                    >
                      <DatePicker
                        style={{ width: '100%' }}
                        format="YYYY-MM-DD"
                        onChange={(date) => setEveFormDate(date!)}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="eve_time"
                      label="Время"
                      rules={[{ required: hasEveService, message: 'Пожалуйста, выберите время' }]}
                    >
                      <TimePicker
                        style={{ width: '100%' }}
                        format="HH:mm"
                        placeholder="Выберите время"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="eve_status"
                      label="Статус"
                      rules={[{ required: hasEveService, message: 'Пожалуйста, выберите статус' }]}
                      initialValue="new"
                    >
                      <Select>
                        {STATUS_OPTIONS.map(option => (
                          <Option key={option.value} value={option.value}>{option.label}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="eve_priority"
                      label="Приоритет"
                      rules={[{ required: hasEveService, message: 'Пожалуйста, выберите приоритет' }]}
                      initialValue="normal"
                    >
                      <Select>
                        {PRIORITY_OPTIONS.map(option => (
                          <Option key={option.value} value={option.value}>{option.label}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="eve_additional_title"
                      label="Богослужение"
                      rules={[{ required: hasEveService, message: 'Пожалуйста, выберите богослужение' }]}
                    >
                      <Select
                        mode="multiple"
                        placeholder="Выберите богослужения"
                        style={{ width: '100%' }}
                        options={[...WORSHIP_SERVICES, ...customServices].map(service => ({
                          value: service,
                          label: service,
                        }))}
                        tagRender={(props) => {
                          const { label, value, closable, onClose } = props;
                          const index = WORSHIP_SERVICES.indexOf(value);
                          const customIndex = customServices.indexOf(value);
                          const order = index >= 0 ? index : WORSHIP_SERVICES.length + customIndex;

                          return (
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '2px 8px',
                                margin: '2px',
                                background: '#f0f0f0',
                                border: '1px solid #d9d9d9',
                                borderRadius: '4px',
                                fontSize: '12px',
                              }}
                            >
                              <span style={{ marginRight: '4px', color: '#999', fontSize: '10px' }}>
                                {order + 1}.
                              </span>
                              {label}
                              {closable && (
                                <span
                                  onClick={onClose}
                                  style={{
                                    marginLeft: '4px',
                                    cursor: 'pointer',
                                    color: '#999',
                                  }}
                                >
                                  ×
                                </span>
                              )}
                            </span>
                          );
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="eve_title"
                      label="Название"
                      rules={[
                        { min: 3, message: 'Минимум 3 символа' },
                        { max: 100, message: 'Максимум 100 символов' }
                      ]}
                    >
                      <Input placeholder="Название события" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="eve_titleColor"
                      label="Цвет названия"
                    >
                      <Select placeholder="Выберите цвет" allowClear>
                        {COLORS.map(color => (
                          <Option key={color.value} value={color.value}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{ width: '20px', height: '20px', background: color.value, border: '1px solid #d9d9d9', borderRadius: '4px' }} />
                              {color.name}
                            </div>
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="eve_description"
                  label="Описание"
                  rules={[{ max: 500, message: 'Максимум 500 символов' }]}
                >
                  <TextArea rows={3} placeholder="Описание события" maxLength={500} showCount />
                </Form.Item>
                <Form.Item
                  name="eve_descriptionColor"
                  label="Цвет описания"
                >
                  <Select placeholder="Выберите цвет" allowClear>
                    {COLORS.map(color => (
                      <Option key={color.value} value={color.value}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '20px', height: '20px', background: color.value, border: '1px solid #d9d9d9', borderRadius: '4px' }} />
                          {color.name}
                        </div>
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Card>
            )}

            <Form.Item>
              <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
                <Button onClick={() => setModalVisible(false)}>Отмена</Button>
                <Button type="primary" htmlType="submit">
                  {editingEvent ? 'Обновить' : 'Создать'}
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="Подтверждение удаления"
          open={deleteModalVisible}
          onOk={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
          okText="Да, удалить"
          cancelText="Отмена"
          okType="danger"
        >
          <p>Вы уверены, что хотите удалить это событие?</p>
          <p style={{ color: '#999', fontSize: '12px' }}>Это действие нельзя отменить. Событие будет удалено навсегда.</p>
        </Modal>
      </Layout>
    </ConfigProvider>
  );
}
