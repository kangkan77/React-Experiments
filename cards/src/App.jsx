// import MoveRight from "lucide-react"

import Cards from "./components/Cards";

const App = () => {

  const services = [
    {
      "title": "Web Design",
      "subtitle": "Designing modern, responsive websites that attract and engage users.",
      "description": "Creative layouts, color harmony, and clean visual flow.",
      "expertise1": "UI/UX Design",
      "expertise2": "Figma & Adobe XD",
      "expertise3": "Responsive Layouts",
      maincolor: "bg-blue-200",
      bgcolor: "bg-blue-300"
    },
    {
      "title": "Copywriting",
      "subtitle": "Writing persuasive words that connect brands with their audience.",
      "description": "Focused on clarity, tone, and emotional engagement.",
      "expertise1": "SEO Writing",
      "expertise2": "Brand Messaging",
      "expertise3": "Content Strategy",
      maincolor: "bg-rose-200",
      bgcolor: "bg-rose-300"
    },
    {
      "title": "App Development",
      "subtitle": "Building smooth, functional mobile apps for Android and iOS.",
      "description": "User-focused design with strong backend support.",
      "expertise1": "React Native",
      "expertise2": "Flutter",
      "expertise3": "API Integration",
      maincolor: "bg-green-200",
      bgcolor: "bg-green-300"
    },
    {
      title: "Frontend Development",
      subtitle: "Creating fast, responsive interfaces with clean and scalable code.",
      description: "Turning UI designs into interactive experiences.",
      expertise1: "React.js",
      expertise2: "Tailwind CSS",
      expertise3: "JavaScript",
      maincolor: "bg-indigo-200",
      bgcolor: "bg-indigo-300"
    },
    {
      title: "Backend Development",
      subtitle: "Developing secure and scalable server-side systems for web apps.",
      description: "Strong logic, optimized APIs, and database management.",
      expertise1: "Node.js",
      expertise2: "Express.js",
      expertise3: "MongoDB",
      maincolor: "bg-indigo-200",
      bgcolor: "bg-indigo-300"
    },
    {
      title: "Graphic Design",
      subtitle: "Crafting creative visuals that strengthen brand identity and recall.",
      description: "A mix of art and strategy for impactful visuals.",
      expertise1: "Logo Design",
      expertise2: "Branding",
      expertise3: "Social Media Graphics",
      maincolor: "bg-pink-200",
      bgcolor: "bg-pink-300"
    },
    {
      title: "SEO Optimization",
      subtitle: "Improving website visibility and ranking on search engines.",
      description: "Focused keyword research and technical improvements.",
      expertise1: "On-page SEO",
      expertise2: "Keyword Analysis",
      expertise3: "Performance Audits",
      maincolor: "bg-yellow-200",
      bgcolor: "bg-yellow-300"
    },
    {
      title: "Video Editing",
      subtitle: "Editing high-quality videos that tell a clear and engaging story.",
      description: "Smooth transitions, pacing, and visual balance.",
      expertise1: "Premiere Pro",
      expertise2: "Color Grading",
      expertise3: "Motion Graphics",
      maincolor: "bg-purple-200",
      bgcolor: "bg-purple-300"
    },
    {
      title: "Social Media Management",
      subtitle: "Building brand presence through engaging social media content.",
      description: "Data-driven content strategy and community engagement.",
      expertise1: "Content Planning",
      expertise2: "Analytics",
      expertise3: "Brand Growth",
      maincolor: "bg-cyan-200",
      bgcolor: "bg-cyan-300"
    },
    {
      title: "UI/UX Research",
      subtitle: "Understanding user behavior to design better digital experiences.",
      description: "Blending analytics with empathy for better interfaces.",
      expertise1: "User Testing",
      expertise2: "Wireframing",
      expertise3: "Prototyping",
      maincolor: "bg-lime-200",
      bgcolor: "bg-lime-300"
    }
  ];


  return (
    <div className='h-auto w-full bg-gray-900 p-5 flex gap-2 flex-wrap'>
      {services.map((elem) => {
        return <div>
          <Cards title={elem.title} subtitle={elem.subtitle} description={elem.description} expertise1={elem.expertise1} expertise2={elem.expertise2} expertise3={elem.expertise3} maincolor={elem.maincolor} bgcolor={elem.bgcolor} />
        </div>
      })}
    </div>
  )
}

export default App