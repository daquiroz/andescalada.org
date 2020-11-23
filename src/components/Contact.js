import React from 'react'

const Contact = class extends React.Component {
  render() {
    return (
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container is-max-desktop has-text-centered">
            <h2 className="title is-size-2 is-spaced is-uppercase fading">
              ¿Quiéres contactarnos?
            </h2>
            <h3 className="subtitle is-size-4">
              Si tienes preguntas sobre Andescalada, quieres tener más información o eres parte de un colectivo que esta desarrollando un sector de escalada y crees que podemos trabajar en conjunto escríbenos a
            </h3>
            <button class="button is-active"><a href="mailto:contacto@andescalada.org?Subject=Informacion%Andescalada">contacto@andescalada.org</a></button>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact