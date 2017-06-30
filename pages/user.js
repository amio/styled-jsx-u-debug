import FONT_COLOR from '../font-color.js'

export default () => {
  return (
    <div>
      <span>hello</span>
      <style jsx>{`
        color: ${FONT_COLOR};
      `}</style>
    </div>
  )
}
