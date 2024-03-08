import LeftSide from '../components/organisms/LeftSide.jsx'
import RightSide from '../components/organisms/RightSide.jsx'
import { Variables } from './constants.js'

export default function Home() {
  
  return (
    <main>
      <section className="registration">
        <LeftSide Variables={Variables} />
        <RightSide Variables={Variables} />
      </section>
    </main >
  );
}
