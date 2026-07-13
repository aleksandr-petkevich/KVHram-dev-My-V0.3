const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export interface Event {
    _id: string;
    date: string;
    time?: string;
    title: string;
    additional_title?: string[];
    description?: string;
    communicants?: number;
    parishioners?: number;
    other?: string;
    status: 'new' | 'in_progress' | 'agreed' | 'done';
    priority: 'low' | 'normal' | 'high';
    titleColor?: string;
    additionalTitleColor?: string;
    descriptionColor?: string;
    otherColor?: string;
    created_at: string;
    updated_at: string;
}

export interface EventsResponse {
    events: Event[];
    total: number;
    page: number;
    totalPages: number;
}

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
}

class ApiClient {
    private token: string | null = null;

    setToken(token: string) {
        this.token = token;
        if (typeof window !== 'undefined') {
            localStorage.setItem('token', token);
        }
    }

    getToken(): string | null {
        if (!this.token && typeof window !== 'undefined') {
            this.token = localStorage.getItem('token');
        }
        return this.token;
    }

    clearToken() {
        this.token = null;
        if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
        }
    }

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const token = this.getToken();
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        };

        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ message: 'An error occurred' }));
            throw new Error(error.message || `HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    async login(credentials: LoginCredentials): Promise<LoginResponse> {
        return this.request<LoginResponse>('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
        });
    }

    async getEvents(params: {
        page?: number;
        limit?: number;
        status?: string;
        priority?: string;
        searchDate?: string;
        searchTitle?: string;
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
    } = {}): Promise<EventsResponse> {
        const searchParams = new URLSearchParams();
        if (params.page) searchParams.set('page', params.page.toString());
        if (params.limit) searchParams.set('limit', params.limit.toString());
        if (params.status) searchParams.set('status', params.status);
        if (params.priority) searchParams.set('priority', params.priority);
        if (params.searchDate) searchParams.set('searchDate', params.searchDate);
        if (params.searchTitle) searchParams.set('searchTitle', params.searchTitle);
        if (params.sortBy) searchParams.set('sortBy', params.sortBy);
        if (params.sortOrder) searchParams.set('sortOrder', params.sortOrder);

        const query = searchParams.toString();
        return this.request<EventsResponse>(`/events${query ? `?${query}` : ''}`);
    }

    async getEventsByDateRange(startDate: string, endDate: string): Promise<Event[]> {
        const searchParams = new URLSearchParams();
        searchParams.set('startDate', startDate);
        searchParams.set('endDate', endDate);
        searchParams.set('limit', '1000'); // Получаем все события за неделю

        return this.request<Event[]>(`/events/range?${searchParams.toString()}`);
    }

    async getEvent(id: string): Promise<Event> {
        return this.request<Event>(`/events/${id}`);
    }

    async createEvent(event: Partial<Event>): Promise<Event> {
        return this.request<Event>('/events', {
            method: 'POST',
            body: JSON.stringify(event),
        });
    }

    async updateEvent(id: string, event: Partial<Event>): Promise<Event> {
        return this.request<Event>(`/events/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(event),
        });
    }

    async deleteEvent(id: string): Promise<void> {
        return this.request<void>(`/events/${id}`, {
            method: 'DELETE',
        });
    }
}

export const apiClient = new ApiClient();