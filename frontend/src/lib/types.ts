export interface Project {
  name: string
  start: Date
  end: Date
  color: string
  roles: string[]
  devType: string
  tech: string[]
  description: string
}

export interface Skill {
  name: string
  level: number
}

export interface SkillsByCategory {
  category: string
  skills: Skill[]
}

export interface ToolTipType {
  name: string
  color: string
  description: string
  x: number
  y: number
}
