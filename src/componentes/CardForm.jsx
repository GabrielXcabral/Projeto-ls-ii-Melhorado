import { Formik } from 'formik';
import { Button, Offcanvas, Form } from 'react-bootstrap';
import { useObjeto } from '../contextos/ObjetosContext';


function CardForm() {
  const { exibFormObjetos, handleClose, handleCreateObjetos } = useObjeto(); //Trazendo referências armazenadas no ObjetosContext.jsx

    return (
      <> 
        <Offcanvas show={exibFormObjetos} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title as="h5">Adicionar Animes</Offcanvas.Title>
          </Offcanvas.Header>
          <Formik initialValues={{nome: '', Imagem: ''}} onSubmit={(objeto) => handleCreateObjetos=(objeto)}>
            {({ handleChange, handleSubmit, handleBlur }) => (
              <Form onSubmit={handleSubmit}>
                <Offcanvas.Body>
                  <Form.Group className="mb-3" controlId="cardFormNome">
                    <Form.Label>Nome do Anime</Form.Label>
                    <Form.Control name="nome" placeholder="Anime escolhido" onChange={handleChange}  onBlur={handleBlur} />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="cardFormImagem">
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control name="imagem" placeholder="Url da imagem" onChange={handleChange}  onBlur={handleBlur} />
                  </Form.Group>


                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  <Button variant="primary float-end"><i class="bi bi-capslock" type="submit"></i></Button>
                </Offcanvas.Body>
              </Form>
            )}
            </Formik>
        </Offcanvas>
      </>
    );
  }

  export default CardForm;