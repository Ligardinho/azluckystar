import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaPhone } from "react-icons/fa6";
import { MdTransitEnterexit } from "react-icons/md";
 
export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 mt-4 mx-4">
      <Input type="email" placeholder="Email"/>
      <Button type="submit">Subscribe</Button>
    </div>
  )
}