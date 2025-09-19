import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Icon from '@/components/ui/icon'

function Index() {
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Форма отправлена:', formData)
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-turquoise-50 to-white font-montserrat">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">
              Счастье есть! 🌟
            </div>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className={`px-3 py-2 rounded-md transition-colors ${activeSection === 'home' ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`px-3 py-2 rounded-md transition-colors ${activeSection === 'about' ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}
              >
                О ведущем
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className={`px-3 py-2 rounded-md transition-colors ${activeSection === 'reviews' ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}
              >
                Отзывы
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`px-3 py-2 rounded-md transition-colors ${activeSection === 'pricing' ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}
              >
                Тарифы
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-2 rounded-md transition-colors ${activeSection === 'contact' ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Счастье есть,<br />
              <span className="text-primary">его не может не быть!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Онлайн психологический интенсив для обретения внутренней гармонии 
              и раскрытия потенциала счастья в вашей жизни
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection('contact')}
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на интенсив
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary/10"
                onClick={() => scrollToSection('about')}
              >
                <Icon name="User" className="mr-2" size={20} />
                Узнать о ведущем
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Video" className="text-primary" size={24} />
                <span className="text-gray-600">Онлайн с видеосвязью</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Users" className="text-primary" size={24} />
                <span className="text-gray-600">Интерактивные упражнения</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Heart" className="text-primary" size={24} />
                <span className="text-gray-600">Путь к счастью</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">О ведущем</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">Ольга Созданова</h3>
              <div className="space-y-4">
                <Badge variant="secondary" className="mr-2 mb-2">Педагог-психолог</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">Семейный психолог</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">Клинический психолог</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">Психотерапевт в модальности</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">Трансактный анализ</Badge>
              </div>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="text-primary" size={20} />
                  <span className="text-lg font-semibold">15 лет практики</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="text-primary" size={20} />
                  <span className="text-lg">+5000 консультаций</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="BookOpen" className="text-primary" size={20} />
                  <span className="text-lg">+250 выступлений</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <span className="text-lg">8(924)262-76-87</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Профессиональный психолог с многолетним опытом работы в области 
                психотерапии и личностного развития. Специализируется на методах 
                трансактного анализа и работе с семейными парами.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="/img/b8ddcef3-f786-497e-af05-72304b2d9a64.jpg" 
                alt="Ольга Созданова" 
                className="rounded-2xl shadow-2xl max-w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 bg-turquoise-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Отзывы участников</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Анна К.",
                text: "Интенсив полностью изменил мое отношение к жизни. Теперь я действительно чувствую счастье каждый день!",
                rating: 5
              },
              {
                name: "Михаил Р.", 
                text: "Ольга — потрясающий специалист. Упражнения были очень эффективными и понятными.",
                rating: 5
              },
              {
                name: "Елена В.",
                text: "Рекомендую всем, кто хочет найти внутреннюю гармонию и научиться быть счастливым.",
                rating: 5
              },
              {
                name: "Дмитрий С.",
                text: "Интерактивный формат очень понравился. Чувствовал поддержку группы на протяжении всего интенсива.",
                rating: 5
              },
              {
                name: "Мария Л.",
                text: "Практические техники, которые действительно работают. Благодарю за этот опыт!",
                rating: 5
              },
              {
                name: "Алексей П.",
                text: "Профессиональный подход и теплая атмосфера. Именно то, что нужно для работы с собой.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-primary">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Тарифы участия</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Базовый</CardTitle>
                <CardDescription>Участие в основной программе</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-6">
                  7 500 ₽
                </div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    3 дня интенсивной работы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Онлайн участие с видеосвязью
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Интерактивные упражнения
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Материалы для самостоятельной работы
                  </li>
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection('contact')}
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-shadow border-primary">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-primary text-white px-4 py-1">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Премиум</CardTitle>
                <CardDescription>Расширенная программа с поддержкой</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-6">
                  12 500 ₽
                </div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Все возможности базового тарифа
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Персональная консультация (1 час)
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Дополнительные практики и техники
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Поддержка в чате 30 дней
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Записи всех сессий
                  </li>
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection('contact')}
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-turquoise-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Запись на интенсив</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-primary">Оставьте заявку</CardTitle>
                <CardDescription className="text-center">
                  Мы свяжемся с вами в ближайшее время для подтверждения участия
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите о ваших ожиданиях от интенсива..."
                      rows={4}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-3"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-gray-600 mb-4">Или свяжитесь напрямую:</p>
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
                    <a href="tel:89242627687" className="flex items-center text-primary hover:underline">
                      <Icon name="Phone" className="mr-2" size={16} />
                      8(924)262-76-87
                    </a>
                    <a href="mailto:olga@example.com" className="flex items-center text-primary hover:underline">
                      <Icon name="Mail" className="mr-2" size={16} />
                      olga@example.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-primary mb-2">Счастье есть! 🌟</h3>
            <p className="text-gray-300">Психологический интенсив для обретения счастья</p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400">
              © 2024 Ольга Созданова. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index