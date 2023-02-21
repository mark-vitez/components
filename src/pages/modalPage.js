import { useState } from "react"
import { createPortal } from "react-dom";
import Button from "../components/button/button"
import Modal from "../components/modal/modal"

function ModalPage() {


    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button warning onClick={ closeModal }>Cancel</Button>
        <Button primary onClick={ closeModal }>Accept</Button>
    </div>

    const content = <div>
        Mollit aliquip officia labore do enim voluptate occaecat laborum eiusmod aute fugiat laboris. Commodo quis exercitation est reprehenderit non. Qui ut et mollit elit officia elit qui pariatur pariatur reprehenderit. Ut do dolor pariatur eiusmod culpa irure aute elit culpa nisi. Nisi velit aliqua elit sunt sunt nostrud Lorem nostrud ipsum duis dolore veniam.
    </div>

    const modal = <Modal onClose={ closeModal } actionBar={ actionBar }>
        { content }
    </Modal>

    return (<div>
        <Button primary rounded onClick={ openModal }>Open modal</Button>
        { showModal && modal }
        <p>Adipisicing non quis et pariatur reprehenderit id officia id ipsum laboris elit. Laboris dolor sunt enim ex exercitation mollit voluptate irure ex ipsum elit. Consequat velit laborum laborum enim mollit ea nostrud sint ullamco. Incididunt ut anim amet aliquip dolor laborum non cupidatat nisi. Incididunt proident est laborum duis pariatur deserunt commodo minim. Tempor elit elit mollit eu cillum culpa ut et est voluptate elit eiusmod. Esse ut ullamco aliqua duis anim commodo nulla ex esse anim.</p>
        <p>Adipisicing non quis et pariatur reprehenderit id officia id ipsum laboris elit. Laboris dolor sunt enim ex exercitation mollit voluptate irure ex ipsum elit. Consequat velit laborum laborum enim mollit ea nostrud sint ullamco. Incididunt ut anim amet aliquip dolor laborum non cupidatat nisi. Incididunt proident est laborum duis pariatur deserunt commodo minim. Tempor elit elit mollit eu cillum culpa ut et est voluptate elit eiusmod. Esse ut ullamco aliqua duis anim commodo nulla ex esse anim.</p>
        <p>Adipisicing non quis et pariatur reprehenderit id officia id ipsum laboris elit. Laboris dolor sunt enim ex exercitation mollit voluptate irure ex ipsum elit. Consequat velit laborum laborum enim mollit ea nostrud sint ullamco. Incididunt ut anim amet aliquip dolor laborum non cupidatat nisi. Incididunt proident est laborum duis pariatur deserunt commodo minim. Tempor elit elit mollit eu cillum culpa ut et est voluptate elit eiusmod. Esse ut ullamco aliqua duis anim commodo nulla ex esse anim.</p>
        <p>Adipisicing non quis et pariatur reprehenderit id officia id ipsum laboris elit. Laboris dolor sunt enim ex exercitation mollit voluptate irure ex ipsum elit. Consequat velit laborum laborum enim mollit ea nostrud sint ullamco. Incididunt ut anim amet aliquip dolor laborum non cupidatat nisi. Incididunt proident est laborum duis pariatur deserunt commodo minim. Tempor elit elit mollit eu cillum culpa ut et est voluptate elit eiusmod. Esse ut ullamco aliqua duis anim commodo nulla ex esse anim.</p>
        <p>Adipisicing non quis et pariatur reprehenderit id officia id ipsum laboris elit. Laboris dolor sunt enim ex exercitation mollit voluptate irure ex ipsum elit. Consequat velit laborum laborum enim mollit ea nostrud sint ullamco. Incididunt ut anim amet aliquip dolor laborum non cupidatat nisi. Incididunt proident est laborum duis pariatur deserunt commodo minim. Tempor elit elit mollit eu cillum culpa ut et est voluptate elit eiusmod. Esse ut ullamco aliqua duis anim commodo nulla ex esse anim.</p>
        <p>Adipisicing non quis et pariatur reprehenderit id officia id ipsum laboris elit. Laboris dolor sunt enim ex exercitation mollit voluptate irure ex ipsum elit. Consequat velit laborum laborum enim mollit ea nostrud sint ullamco. Incididunt ut anim amet aliquip dolor laborum non cupidatat nisi. Incididunt proident est laborum duis pariatur deserunt commodo minim. Tempor elit elit mollit eu cillum culpa ut et est voluptate elit eiusmod. Esse ut ullamco aliqua duis anim commodo nulla ex esse anim.</p>
        <p>Adipisicing non quis et pariatur reprehenderit id officia id ipsum laboris elit. Laboris dolor sunt enim ex exercitation mollit voluptate irure ex ipsum elit. Consequat velit laborum laborum enim mollit ea nostrud sint ullamco. Incididunt ut anim amet aliquip dolor laborum non cupidatat nisi. Incididunt proident est laborum duis pariatur deserunt commodo minim. Tempor elit elit mollit eu cillum culpa ut et est voluptate elit eiusmod. Esse ut ullamco aliqua duis anim commodo nulla ex esse anim.</p>
        <p>Adipisicing non quis et pariatur reprehenderit id officia id ipsum laboris elit. Laboris dolor sunt enim ex exercitation mollit voluptate irure ex ipsum elit. Consequat velit laborum laborum enim mollit ea nostrud sint ullamco. Incididunt ut anim amet aliquip dolor laborum non cupidatat nisi. Incididunt proident est laborum duis pariatur deserunt commodo minim. Tempor elit elit mollit eu cillum culpa ut et est voluptate elit eiusmod. Esse ut ullamco aliqua duis anim commodo nulla ex esse anim.</p>
        <p>Adipisicing non quis et pariatur reprehenderit id officia id ipsum laboris elit. Laboris dolor sunt enim ex exercitation mollit voluptate irure ex ipsum elit. Consequat velit laborum laborum enim mollit ea nostrud sint ullamco. Incididunt ut anim amet aliquip dolor laborum non cupidatat nisi. Incididunt proident est laborum duis pariatur deserunt commodo minim. Tempor elit elit mollit eu cillum culpa ut et est voluptate elit eiusmod. Esse ut ullamco aliqua duis anim commodo nulla ex esse anim.</p>
        <p>Adipisicing non quis et pariatur reprehenderit id officia id ipsum laboris elit. Laboris dolor sunt enim ex exercitation mollit voluptate irure ex ipsum elit. Consequat velit laborum laborum enim mollit ea nostrud sint ullamco. Incididunt ut anim amet aliquip dolor laborum non cupidatat nisi. Incididunt proident est laborum duis pariatur deserunt commodo minim. Tempor elit elit mollit eu cillum culpa ut et est voluptate elit eiusmod. Esse ut ullamco aliqua duis anim commodo nulla ex esse anim.</p>
        <p>Adipisicing non quis et pariatur reprehenderit id officia id ipsum laboris elit. Laboris dolor sunt enim ex exercitation mollit voluptate irure ex ipsum elit. Consequat velit laborum laborum enim mollit ea nostrud sint ullamco. Incididunt ut anim amet aliquip dolor laborum non cupidatat nisi. Incididunt proident est laborum duis pariatur deserunt commodo minim. Tempor elit elit mollit eu cillum culpa ut et est voluptate elit eiusmod. Esse ut ullamco aliqua duis anim commodo nulla ex esse anim.</p>
        <p>Adipisicing non quis et pariatur reprehenderit id officia id ipsum laboris elit. Laboris dolor sunt enim ex exercitation mollit voluptate irure ex ipsum elit. Consequat velit laborum laborum enim mollit ea nostrud sint ullamco. Incididunt ut anim amet aliquip dolor laborum non cupidatat nisi. Incididunt proident est laborum duis pariatur deserunt commodo minim. Tempor elit elit mollit eu cillum culpa ut et est voluptate elit eiusmod. Esse ut ullamco aliqua duis anim commodo nulla ex esse anim.</p>
    </div>)
}

export default ModalPage