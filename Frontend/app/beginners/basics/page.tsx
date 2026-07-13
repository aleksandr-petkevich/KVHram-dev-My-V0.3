import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Основы веры | Для новоначальных',
  description: 'Символ веры, заповеди Божии, основные молитвы — всё, что нужно знать православному христианину.',
}

const commandments = [
  'Я Господь, Бог твой; да не будет у тебя других богов пред лицом Моим.',
  'Не делай себе кумира.',
  'Не произноси имени Господа, Бога твоего, напрасно.',
  'Помни день субботний, чтобы святить его; шесть дней работай и делай всякие дела твои, а день седьмой — Господу Богу твоему.',
  'Почитай отца твоего и мать твою.',
  'Не убивай.',
  'Не прелюбодействуй.',
  'Не кради.',
  'Не произноси ложного свидетельства на ближнего твоего.',
  'Не желай ничего, что у ближнего твоего.',
]

const prayers = [
  {
    title: 'Молитва Господня (Отче наш)',
    text: `Отче наш, Иже еси на небесех!
Да святится имя Твое, да приидет Царствие Твое,
да будет воля Твоя, яко на небеси и на земли.
Хлеб наш насущный даждь нам днесь;
и остави нам долги наша,
якоже и мы оставляем должником нашим;
и не введи нас во искушение,
но избави нас от лукаваго.`,
  },
  {
    title: 'Иисусова молитва',
    text: 'Господи Иисусе Христе, Сыне Божий, помилуй мя грешнаго.',
  },
  {
    title: 'Молитва ко Пресвятой Богородице',
    text: `Богородице Дево, радуйся,
Благодатная Марие, Господь с Тобою;
благословена Ты в женах
и благословен Плод чрева Твоего,
яко Спаса родила еси душ наших.`,
  },
  {
    title: 'Трисвятое',
    text: 'Святый Боже, Святый Крепкий, Святый Безсмертный, помилуй нас. (читается трижды)',
  },
]

export default function BasicsPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/beginners">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Для новоначальных
            </Link>
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
                Основы веры
              </h1>
            </div>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Символ веры, заповеди и молитвы, которые должен знать каждый православный христианин
          </p>
        </div>
      </section>

      {/* Symbol of Faith */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Символ веры
            </h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Символ веры — это краткое изложение основ православной веры, 
                  составленное отцами Церкви на Первом и Втором Вселенских Соборах. 
                  Его необходимо знать наизусть каждому православному христианину.
                </p>
                <div className="bg-muted/50 rounded-xl p-6 font-serif text-foreground leading-relaxed">
                  <p className="mb-4">
                    <strong>1.</strong> Верую во единаго Бога Отца, Вседержителя, 
                    Творца небу и земли, видимым же всем и невидимым.
                  </p>
                  <p className="mb-4">
                    <strong>2.</strong> И во единаго Господа Иисуса Христа, 
                    Сына Божия, Единороднаго, Иже от Отца рожденнаго прежде всех век; 
                    Света от Света, Бога истинна от Бога истинна, рожденна, несотворенна, 
                    единосущна Отцу, Имже вся быша.
                  </p>
                  <p className="mb-4">
                    <strong>3.</strong> Нас ради человек и нашего ради спасения 
                    сшедшаго с небес и воплотившагося от Духа Свята и Марии Девы, 
                    и вочеловечшася.
                  </p>
                  <p className="mb-4">
                    <strong>4.</strong> Распятаго же за ны при Понтийстем Пилате, 
                    и страдавша, и погребенна.
                  </p>
                  <p className="mb-4">
                    <strong>5.</strong> И воскресшаго в третий день по Писанием.
                  </p>
                  <p className="mb-4">
                    <strong>6.</strong> И возшедшаго на небеса, и седяща одесную Отца.
                  </p>
                  <p className="mb-4">
                    <strong>7.</strong> И паки грядущаго со славою судити живым и мертвым, 
                    Егоже Царствию не будет конца.
                  </p>
                  <p className="mb-4">
                    <strong>8.</strong> И в Духа Святаго, Господа, Животворящаго, 
                    Иже от Отца исходящаго, Иже со Отцем и Сыном спокланяема и сславима, 
                    глаголавшаго пророки.
                  </p>
                  <p className="mb-4">
                    <strong>9.</strong> Во едину Святую, Соборную и Апостольскую Церковь.
                  </p>
                  <p className="mb-4">
                    <strong>10.</strong> Исповедую едино крещение во оставление грехов.
                  </p>
                  <p className="mb-4">
                    <strong>11.</strong> Чаю воскресения мертвых,
                  </p>
                  <p>
                    <strong>12.</strong> и жизни будущаго века. Аминь.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commandments */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Десять заповедей
            </h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Десять заповедей были даны Богом пророку Моисею на горе Синай. 
                  Они являются основой нравственной жизни человека.
                </p>
                <ol className="space-y-4">
                  {commandments.map((commandment, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-foreground pt-1">{commandment}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prayers */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Основные молитвы
            </h2>
            <div className="space-y-6">
              {prayers.map((prayer, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      {prayer.title}
                    </h3>
                    <div className="bg-muted/50 rounded-lg p-4 font-serif text-foreground whitespace-pre-line">
                      {prayer.text}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold mb-6">
            Продолжайте изучение
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/beginners/confession-guide">Как исповедоваться</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/beginners/communion-guide">Подготовка к причастию</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
