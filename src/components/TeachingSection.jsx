import WayToteach from './WayToTeach'
import {ways} from '../data'

export default function TeachingSection() {
return (
    <section>
            <h3>наш подход</h3>
            <ul>
              
              {[ways.map(way=><WayToteach key ={way.title} {... way}/>)]}
              
              {/*
              <WayToteach {...ways[0]}/>
    
              <WayToteach{... ways[1] }/>
    
              <WayToteach{... ways[2] }/>
    
              <WayToteach{... ways[3] }/>
                <WayToteach{... ways[4] }/>*/}
              
            </ul> 
          </section>
)
}