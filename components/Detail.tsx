
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Education from "./Education"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"

export default function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-4">
        
        {/* Tabs Trigger Buttons*/}
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>

      {/* Tabs Content Here */}
      
      {/* Education */}

      <TabsContent value="education">
        <Education />        
      </TabsContent>

      {/* Skills */}

      <TabsContent value="skills">
        <Skills />        
      </TabsContent>
      
      {/* Projects */}

      <TabsContent value="projects"> 
        <Projects />       
      </TabsContent>
      
      {/* Contact */}

      <TabsContent value="contact"> 
        <Contact />       
      </TabsContent>
      
    </Tabs>
  )
}
