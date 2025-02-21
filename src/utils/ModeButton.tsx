import { Circle } from "../assets/svg"
import { useAppDispatch,useAppState } from "../context/AppContext"

const ModeButton = () => {
  const dispatch = useAppDispatch()
  const { theme } = useAppState()
  console.log(theme)
  return (
    <div className="w-10 h-4 border border-black rounded-full absolute right-10 top-4 text-gray-700" onClick={()=> dispatch({type: "TOGGLE_THEME"})}>
      <Circle className={`absolute transition-all duration-100 ${theme == 'light'? 'left-0': 'right-0'}`} />
    </div>
  )
}

export default ModeButton
