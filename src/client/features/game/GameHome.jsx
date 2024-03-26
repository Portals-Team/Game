/*Current question will fetch from the database Quiz_problems to show the tally of how many questions have been answered in the quiz*/

/*image will be fetch from the database Image_Word table to show the image for that quiz*/

/*Score will be fetched from the database via the Quiz_problems table to display a tally of how many questions the players got wrong or right*/

/*answer grid will fetch the topic_word from the database Image_Word table and reveal a letter when the user correctly answers a quiz question*/

/*the solve button will direct the user to the QuizAnswer component to solve the quiz*/

/*ready for next question button will allow the user to toggle back and forth from Quiz component and the GameHome component*/

// import {useGetQuizQuery, useGetImageWordsQuery} from "./gameSlice"
// import {useGetMeQuery} from "../auth/authSlice"

export default function GameHome() {
  // const {id} = useParams();

  // const {data: quiz} = useGetQuizQuery(id);
  // const {data: imageWord} = useGetImageWordsQuery(quiz.id);

  // const {data: me} = useGetMeQuery();

  return (
    <>
      <h1>GameHome</h1>
      {/*flex this section into a row*/}
      <section>
        <li>Current Question</li>
        {/*image will be blurred and come into focus when a question is answered correctly*/}
        <img src={"www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theatlantic.com%2Ftechnology%2Farchive%2F2012%2F05%2Fthe-tao-of-shutterstock-what-makes-a-stock-photo-a-stock-photo%2F257280%2F&psig=AOvVaw3WNZMQqeagRC6CPZD7UORC&ust=1711567028654000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDG05jSkoUDFQAAAAAdAAAAABAE"} />
        <li>Score</li>
      </section>
      <section>
        {/*answer grid should be a controlled form*/}
        <h1>ANSWER GRID</h1>
        <form>
          {/*in CSS resize the width of each input container to be the length 
          of one letter*/}
          <div>
            <input type="text" maxlength="1" class="letter" />
            <input type="text" maxlength="1" class="letter" />
            <input type="text" maxlength="1" class="letter" />
            <input type="text" maxlength="1" class="letter" />
            <input type="text" maxlength="1" class="letter" />
          </div>
        </form>
      </section>
      <section>
        {/* <Link to="/game/submit">SOLVE</Link>
        <Link to="/game/quiz">READY FOR NEXT QUESTION</Link> */}
      </section>
    </>
  );
}
