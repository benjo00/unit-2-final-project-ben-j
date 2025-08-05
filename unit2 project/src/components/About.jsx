import Statue from "../assets/Statue.jpg"
import texts from "../assets/texts.jpg"

function About() {
  return (
    <div className="content">
      <div id="About">
        <div className="imagesAbout">
          <img src={Statue} className="statue" alt="a statue of meditating person" />
          <img src={texts} className="texts" alt="a stack of ancient looking texts" />
        </div>
        <h5 id="aboutHeading">The Stress Cure is Your Core Resource for Finding Peace</h5>
     <p>Here you will find searchable databases where can be found a wealth of information on the practice of meditation. On the main home page you will find a tool which allows choosing your preferred meditation styles and then recommends articles that will give further information. You will also find searchable databases on the Ancient and Modern pages. The Ancient page database contains many ancient texts in a searchable database. Simply type in the topic you want to learn about and you will find articles and texts written by the ancient meditation masters.</p>
   <p>On the Modern page you will find similar for modern texts. These include studies demonstrating the benefits of meditation, articles discussing how meditation helps modern life, and general information by today's preeminent meditation experts.</p>
      </div>
    </div>
  );
}

export default About;
