const Button = ({text}: {text: string}) => {
  return (
    <button className="group rounded-full bg-[#1557FE] px-8 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg">
      <span className="flex items-center gap-2">
        {text}
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </button>
  )
}

export default Button