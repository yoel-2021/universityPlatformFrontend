import { AppRoutes } from "../routes/AppRoutes"
import { MenuIcons } from "./MenuIcon"

export type MenuItem ={
    icon:MenuIcons,
    text: string,
    route:AppRoutes
}