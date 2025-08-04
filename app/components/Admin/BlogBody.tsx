import React, {useState, useEffect} from "react";
import AccountModal from "../Instructors/AccountModal";

const BlogBody = () => {
    const [showModal, setShowModal] = useState<string | null>(null);
    const openModal = (key: string) => setShowModal(key);
    const closeModal = () => setShowModal(null);
    
    return (
        <div>
            <div>
                <div className="mt-2 flex justify-end">
                    <button className="btn btn-primary-fill" onClick={() => openModal("create-blog")}>Create Blog</button>
                </div>
            </div>
            
            {
                showModal && 
                <AccountModal modalType={showModal} modalClose={closeModal}/>
            }

        </div>
    )
}

export default BlogBody