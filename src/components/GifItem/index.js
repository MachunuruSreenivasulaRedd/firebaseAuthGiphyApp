import './index.css'
const GifItem = props => {
  const {item} = props
  const gifUrl = item.images.downsized.url
  const text= item.title
  return (
    <div className="gif">
        <img src={gifUrl} alt={text} className="gifsImage" />
    </div>
  )
}
export default GifItem