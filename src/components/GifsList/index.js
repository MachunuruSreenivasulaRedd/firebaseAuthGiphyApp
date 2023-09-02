import {Component} from 'react'
import {ColorRing} from 'react-loader-spinner'
import GifItem from '../GifItem'
import './index.css'

class GifList extends Component {
    state = {
        GifsList: [],
        searchInput: '',
        isLoading: false,
    }

    getGifsData = async () => {
        const {searchInput} = this.state
        const APIKEY = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65'
        const URL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10&q=`+searchInput
        const response = await fetch(URL)
        const data = await response.json()
        this.setState({GifsList: data.data, isLoading: false})
    }

    takeSearchInput = event => {
        this.setState({searchInput: event.target.value})
    }

    searchGif = event => {
      if (event.key === 'Enter') {
        this.setState({GifsList: [], isLoading: true})
        this.getGifsData()
      }
    }

    render(){
        const { GifsList, isLoading} = this.state
        return(
            <div>
               <div id="search">
	<svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg">
		<rect class="bar"/>
		
		<g class="magnifier">
			<circle class="glass"/>
			<line class="handle" x1="32" y1="32" x2="44" y2="44"></line>
		</g>

		<g class="sparks">
			<circle class="spark"/>
			<circle class="spark"/>
			<circle class="spark"/>
		</g>

		<g class="burst pattern-one">
			<circle class="particle circle"/>
			<path class="particle triangle"/>
			<circle class="particle circle"/>
			<path class="particle plus"/>
			<rect class="particle rect"/>
			<path class="particle triangle"/>
		</g>
		<g class="burst pattern-two">
			<path class="particle plus"/>
			<circle class="particle circle"/>
			<path class="particle triangle"/>
			<rect class="particle rect"/>
			<circle class="particle circle"/>
			<path class="particle plus"/>
		</g>
		<g class="burst pattern-three">
			<circle class="particle circle"/>
			<rect class="particle rect"/>
			<path class="particle plus"/>
			<path class="particle triangle"/>
			<rect class="particle rect"/>
			<path class="particle plus"/>
		</g>
	</svg>
	<input type="search" onChange={this.takeSearchInput} onKeyDown={this.searchGif} aria-label="Search for inspiration"/>
</div>
                {isLoading ? (
                    <div data-testid="loader">
                        <center>
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
                        </center>
                    </div>
                ):
                (<div className="gifsContainer">
                   {GifsList.map(eachItem => (
                     <GifItem item={eachItem} key={eachItem.id} />
                   ))}
                </div>)
    }
            </div>
        )
    }
}
export default GifList