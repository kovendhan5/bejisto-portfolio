import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-serif">
              Bejisto
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-gray-900">
                About me
              </Link>
              <Link href="#education" className="text-gray-600 hover:text-gray-900">
                Education
              </Link>
              <Link href="#portfolio" className="text-gray-600 hover:text-gray-900">
                Portfolio
              </Link>
              <Link href="#experience" className="text-gray-600 hover:text-gray-900">
                Experience
              </Link>
              <Link href="#contacts" className="text-gray-600 hover:text-gray-900">
                Contacts
              </Link>
            </nav>
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative z-10">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <Link href="https://github.com" className="text-gray-600 hover:text-gray-900">
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/bejisto-joseph-643359259/"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900">
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <h1 className="text-6xl font-serif">Bejisto Joseph</h1>
              <p className="text-xl text-gray-600">// Full Stack Developer //</p>
              <p className="text-gray-600 italic">
                "Crafting digital experiences through elegant code and innovative solutions."
              </p>
              <Button className="rounded-full" asChild>
                <Link href="#contacts">Write me</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-blue-100 via-pink-100 to-blue-50 p-8">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                    src="/profile.png"
                    alt="Professional headshot"
                    width={600}
                    height={600}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-20" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-100 rounded-full opacity-20" />
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:block">
            <div className="text-sm text-gray-400 rotate-90 whitespace-nowrap">LET'S WORK TOGETHER</div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif mb-12 text-center">About me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Hello! I'm Bejisto Joseph, a passionate Full Stack Developer with a keen interest in building scalable
                  web applications and solving complex problems through code.
                </p>
                <p className="text-lg text-gray-600">
                  With expertise in both frontend and backend technologies, I specialize in creating seamless user
                  experiences while ensuring robust and efficient server-side operations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold mb-2">Frontend</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>React.js</li>
                      <li>JavaScript</li>
                      <li>HTML/CSS</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Backend</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Python</li>
                      <li>Node.js</li>
                      <li>MongoDB</li>
                      <li>SQL</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden w-full h-[600px]">
              <div className="aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="/placeholder.svg"
                      alt="Placeholder"
                      width={600}
                      height={600}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif mb-12 text-center">Education</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
                    <p className="text-gray-600">University Name</p>
                    <p className="text-gray-500 mt-2">
                      Relevant coursework: Data Structures, Algorithms, Web Development, Database Management
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">2019 - 2023</p>
                    <p className="text-sm text-gray-400">GPA: 3.8/4.0</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">Full Stack Development Certification</h3>
                    <p className="text-gray-600">Online Platform</p>
                    <p className="text-gray-500 mt-2">
                      Comprehensive training in modern web development technologies and practices
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">2023</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif mb-12 text-center">Portfolio</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <Card key={project} className="group overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=400`}
                      alt={`Project ${project}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">Project Title {project}</h3>
                    <p className="text-gray-600 mb-4">Brief description of the project and technologies used.</p>
                    <div className="flex gap-2 flex-wrap mb-4">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MongoDB</span>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      View Project <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif mb-12 text-center">Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                    <p className="text-gray-600">Company Name</p>
                    <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                      <li>Developed and maintained web applications using React.js and Node.js</li>
                      <li>Implemented responsive designs and optimized application performance</li>
                      <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                    </ul>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">2023 - Present</p>
                    <p className="text-sm text-gray-400">Full-time</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">Web Development Intern</h3>
                    <p className="text-gray-600">Company Name</p>
                    <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                      <li>Assisted in developing frontend components using React.js</li>
                      <li>Participated in code reviews and team meetings</li>
                      <li>Gained hands-on experience with agile development practices</li>
                    </ul>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">2022 - 2023</p>
                    <p className="text-sm text-gray-400">Internship</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacts" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif mb-12 text-center">Get in Touch</h2>
            <div className="max-w-xl mx-auto">
              <Card className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-100 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-100 outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-100 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-100 outline-none min-h-[150px]"
                      required
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">© 2024 Bejisto Joseph. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-gray-600 hover:text-gray-900">
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/bejisto-joseph-643359259/"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

