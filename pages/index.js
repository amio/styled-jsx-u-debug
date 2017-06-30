import FONT_COLOR from '../font-color.js'

export default () => {
  return (
    <div>
      Hi <a href='/user'>user</a>

      <style jsx>{`
        color: ${FONT_COLOR}
      `}</style>
    </div>
  )
}
