import FeebackTable from '../../components/Table/FeedbackTable/feedbackTable';
import './feedback.css';

const Feedback = () => {
  return (
    <>
    <section className='feedback' id='feedback'>
    <div className="content">
            <h3>User Messages</h3>
        </div>
        <FeebackTable/>

    </section>
    </>
  )
}

export default Feedback