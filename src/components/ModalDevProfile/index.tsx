import { Container } from "./styles";
import { BsStackOverflow } from "react-icons/bs"
import { MdAlternateEmail } from "react-icons/md"
import { GrClose } from "react-icons/gr"
import { useContext } from "react";
import { GlobalContext } from "../../providers/Global/GlobalContext";
import { DevContext } from "../../providers/Dev/DevContext";
import { AiOutlineThunderbolt } from "react-icons/ai";



function ModalDevProfile(){
    const style = { fontSize: "22px", color:"#5B2E76"}
    const { handleImageError } = useContext(GlobalContext)
    const { dev, setModalDevProfile } = useContext(DevContext)

    return(
        <Container>
            
            <div className="devProfile">
                
                <header> 
                    <button className="buttonClose" onClick={() => setModalDevProfile(false)}><GrClose /></button>    
                    <img src={dev?.avatar_URL || ""} onError={handleImageError} alt="Avatar do usuário" />                
                    <h1>{dev?.name}</h1>                              
                </header>


                <div className="devDetails">
                    <section >
                        <span>{dev?.name} é um(a).. </span>                        
                        <h2>{dev?.title}</h2>

                        <div className="devStacks">
                            <p><BsStackOverflow style={style}/></p> 
                            {typeof dev?.stacks === "string" ? dev.stacks : dev?.stacks?.map((stack, index) => <span key={index} className="stack">{stack}</span>)} 

                        </div>

                        <div>
                            <p><AiOutlineThunderbolt style={style} /> {dev?.level}</p>
                            <p><MdAlternateEmail style={style} />{dev?.social}</p>
                        </div>
                    </section>

                    <section>
                        <h2>Descrição</h2>
                        <p>{dev?.bio}</p>
                    
                    </section>

                </div>

                <div className="emailButton">
                    <a className="emailButton" href={`mailto:${dev?.email}`}>Enviar Email</a>
                </div>

            </div>
        </Container>
    )
}

export default ModalDevProfile;