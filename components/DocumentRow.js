import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Modal from "@material-tailwind/react/Modal";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

function DocumentRow({id, fileName, date, deleteRow}) {

    const router = useRouter();
    const[showModal, setShowModal] = useState(false); 

    const handleDelete=() =>{
        deleteRow();
        setShowModal(false);
    }

    const modal = (
        <Modal
          size="sm"
          active={showModal}
          toggler={() => setShowModal(false)}
        >
          <ModalFooter>
            <Button
              color="red"
              buttonType="link"
              onClick={(e) => handleDelete()}
              ripple="dark"
            >
              Delete
            </Button>
          </ModalFooter>
        </Modal>
    );


    return (
        <div
         className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer">
            <Icon onClick={() => router.push(`/doc/${id}`)} name="article" size="3xl" color="blue"/>
            <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
            <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
            <Button
             color="gray"
             buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
              >
                {modal}
                <Icon onClick={() => setShowModal(true)} name="more_vert" size ="3xl"/>
            </Button>
        </div>
    )
}

export default DocumentRow;

