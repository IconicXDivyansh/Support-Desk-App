import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getTicket, closeTicket } from '../features/tickets/ticketSlice'
import { getNotes,createNote ,reset as notesReset } from '../features/notes/noteSlice'
import BackButton from '../components/BackButton'
import Modal from 'react-modal'
import { FaPlus } from 'react-icons/fa'
import NoteItem from '../components/NoteItem'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'


const customStyles = {
    content: {
        width: '600px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'relative',
    }

} 

Modal.setAppElement('#root')


function Ticket() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [noteText, setNoteText] = useState('');
    const {ticket, isLoading, isError, isSuccess, message} = useSelector(state => state.tickets)
    const {notes, isLoading: notesIsLoading} = useSelector(state => state.notes)
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();

    const { ticketId } = params;



    useEffect(() => {
        if (isError) {
          toast.error(message)
        }
        
        if (isSuccess) {
            dispatch(getTicket(ticketId));
            dispatch(getNotes(ticketId));
        }
    }, [isError, message, ticketId])
    
    const onTicketClose = () => {
        dispatch(closeTicket(ticketId))
        toast.success('Ticket Closed Successfully')
        navigate('/tickets')
    }

    // note submit
    const onNoteSubmit = (e) => { 
        e.preventDefault();
        dispatch(createNote({noteText, ticketId}))
        closeModal();
    }


    // open-close modal
    const openModal = () => { 
        setModalIsOpen(true)
    }
    const closeModal = () => {
        setModalIsOpen(false)
    }

    if (isLoading || notesIsLoading) {
        return <Spinner />
    }


    if (isError) {
        return <h3>Something went wrong !!!</h3>
    }
  return (
      <div className='ticket-page'>
          <header className='ticket-header'>
              <BackButton url='/tickets' />
              <h2>
                  Ticket Id : {ticket._id}
                  <span className={`status status-${ticket.status}`}>
                      {ticket.status}
                  </span>
              </h2>
              <h3>Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-In')}</h3>
              <h3>Product : {ticket.product}</h3>
              <hr />
              <div className="ticket-desc">
                  <h3>Description of Issue</h3>
                  <p>{ ticket.description}</p>
              </div>
              <h2>Notes</h2>
          </header>

          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Add Note'>
              <h2>Add note</h2>
              <button className='btn-close' onClick={closeModal}>X</button>
              <form onSubmit={onNoteSubmit}>
                  <div className="form-group">
                      <textarea name="noteText" id="noteText" className='form-control' placeholder='text' value={noteText} onChange={(e)=>setNoteText(e.target.value)}></textarea>
                  </div>
                  <div className="form-group">
                      <button className="btn" type='submit'>Submit</button>
                  </div>
              </form>
          </Modal>

          {ticket.status != 'closed' && (
              <button className='btn' onClick={openModal}><FaPlus/> Add Note</button>)}

          {notes.map((note) => (
              <NoteItem key={note._id} note={note} />
          ))}

          {ticket.status != 'closed' && (
              <button className='btn btn-block btn-danger' onClick={onTicketClose}>Close Ticket</button>
          )}
    </div>
  )
}

export default Ticket