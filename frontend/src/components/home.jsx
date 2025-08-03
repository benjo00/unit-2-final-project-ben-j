import { useState } from "react";
import Button from "./Button";
// Home.jsx uses Button component as a child to meet project requirement

function Home() {
  const [choiceUserMakes, afterUserSelects] = useState([]);
  const [givenIdeasForUser, setIdea] = useState("");

  const meditationTypes = ["Vipassana", "Jhana", "Mindfulness"];

  const handlingFor = (event) => {
    const value = event.target.value;
    afterUserSelects((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const submitting = () => {
    if (choiceUserMakes.length === 0) {
      setIdea("Please select at least one meditation type.");
      return;
    }

    if (
      choiceUserMakes.includes("Vipassana") &&
      choiceUserMakes.includes("Jhana") &&
      choiceUserMakes.includes("Mindfulness")
    ) {
      setIdea("Please see the pages on Modern and Ancient where you will find articles on all three techniques.");
    } else if (
      choiceUserMakes.includes("Vipassana") &&
      choiceUserMakes.includes("Jhana")
    ) {
      setIdea("Please see the pages on Modern and Ancient for articles on Vipassana and Jhana.");
    } else if (
      choiceUserMakes.includes("Mindfulness") &&
      choiceUserMakes.includes("Jhana")
    ) {
      setIdea("Recommended reading on Mindfulness and Jhana is available on Modern and Ancient pages.");
    } else if (
      choiceUserMakes.includes("Vipassana") &&
      choiceUserMakes.includes("Mindfulness")
    ) {
      setIdea("Find articles on Vipassana and Mindfulness on both content pages.");
    } else if (choiceUserMakes.includes("Jhana")) {
      setIdea("Articles on Jhana can be found on the Ancient and Modern pages.");
    } else if (choiceUserMakes.includes("Vipassana")) {
      setIdea("Vipassana articles are available on Ancient and Modern pages.");
    } else if (choiceUserMakes.includes("Mindfulness")) {
      setIdea("Mindfulness content is on both the Modern and Ancient pages.");
    }
  };

  return (
    <div className="App">
      <div className="content">
        <div className="home">
          <h2>The Stress Cure</h2>
          <p>Bringing the Mind Home</p>
          <p>Pick your favored combination of meditation techniques</p>

          <form>
            {meditationTypes.map((picked) => (
              <div key={picked}>
                <label>
                  <input
                    type="checkbox"
                    value={picked}
                    checked={choiceUserMakes.includes(picked)}
                    onChange={handlingFor}
                  />
                  {picked}
                </label>
              </div>
            ))}
          </form>

          <Button onClick={submitting} label="Submit" />

          {givenIdeasForUser && <div id="ideas">{givenIdeasForUser}</div>}

          <h3>Study Highlights</h3>
      <table>
        <thead>
          <tr>
            <th>Study Title</th>
            <th>Topic</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Science of Meditation</td>
            <td>General Benefits</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>Mindfulness of breathing, how does it affect cardio metabolic health?</td>
            <td>Cardiovascular Health</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>Does walking meditation help anxiety? A long term study</td>
            <td>Mental Health</td>
            <td>2019</td>
          </tr>
          <tr>
            <td>Is Yoga good for arthritis?</td>
            <td>Joint Health</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>How important is stretching for elderly meditators?</td>
            <td>Aging</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>Zen, a 20 year study</td>
            <td>Philosophy</td>
            <td>2015</td>
          </tr>
          <tr>
            <td>Surya Namaskar for joint mobility in older adults</td>
            <td>Mobility</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>Sun Salutations as a method of helping people get more exercise, a study</td>
            <td>Fitness</td>
            <td>2017</td>
          </tr>
          <tr>
            <td>A 30 year study on the benefits of vipassana for stress levels</td>
            <td>Stress Reduction</td>
            <td>2023</td>
          </tr>
          <tr>
            <td>Mindfulness in daily life compared to control, a meta study</td>
            <td>Daily Practice</td>
            <td>2020</td>
          </tr>
        </tbody>
      </table>
      {/* Added a table using my mock data as per final project requirements for including a table*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
