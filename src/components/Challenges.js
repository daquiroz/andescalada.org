import React from 'react'
import icono_coaliciones from '../img/icono_coaliciones.svg'
import icono_app from '../img/icono_app.svg'
import icono_baño from '../img/icono_baño.svg'
import icono_impacto_ambiental from '../img/icono_impacto_ambiental.svg'
import icono_trekking from '../img/icono_trekking.svg'

const Challenges = class extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container is-widescreen">
            <h2 className="title is-size-2 is-spaced is-uppercase fading">
              Líneas de acción
            </h2>
            <h4 className="subtitle is-size-4">
              Nuestro trabajo se divide en tres áreas que, en conjunto, buscan proporcionar un espacio de comunicación y entregar herramientas de gestión a la comunidad escaladora
            </h4>
            <div className="columns is-hidden-mobile">
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <div className="hero is-primary is-medium"
                      style={{
                        backgroundImage: `url(${
                          "/img/unir_desktop.jpg"
                        })`,
                        backgroundPosition: `center center`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`
                      }}
                    >
                      <div className="hero-body">
                        <div className="container">
                          <h1 className="title">
                            Unir
                          </h1>
                          <h2 className="subtitle">
                            Generar vínculos duraderos entre la comunidad local y escaladora
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-content ">
                    <div className="content">
                      <p className="title is-4 is-spaced">El desafío</p>
                      <p className="subtitle is-6 is-spaced">A pesar del crecimiento que ha tenido la escalada aun sigue siendo difícil entablar relaciones entre quienes escalan, quienes viven cerca de los sectores y quienes poseen los terrenos.</p>
                      <p className="title is-4 is-spaced">¿En qué trabajamos?</p>
                      <div className="columns">
                        <div className="column is-one-fifth has-text-centered">
                          <img src={icono_coaliciones} alt="Coaliciones" />
                        </div>
                        <div className="column">
                          <p className="subtitle is-6">Coaliciones preocupadas de manera integral del cuidado y desarrollo del sector, trabajando en conjunto con comundiades locales.</p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-fifth has-text-centered">
                          <img src={icono_app} alt="Aplicación móvil" />
                        </div>
                        <div className="column">
                          <p className="subtitle is-6">Aplicación móvil que permita conocer los acuerdos y coaliciones de cada sector</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <div className="hero is-primary is-medium"
                      style={{
                        backgroundImage: `url(${
                          "/img/cuidar_desktop.jpg"
                        })`,
                        backgroundPosition: `center center`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`
                      }}
                    >
                      <div className="hero-body">
                        <div className="container">
                          <h1 className="title">
                            Cuidar
                          </h1>
                          <h2 className="subtitle">
                            Proteger los ecosistemas y mitigar el impacto creado por la escalada
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-content ">
                    <div className="content">
                      <p className="title is-4 is-spaced">El desafío</p>
                      <p className="subtitle is-6 is-spaced">Debemos desarrollar planes de manejo ambiental para los sectores de escalada, para cuidar los ecosistemas y especies endémicas. Esto nos ayudará a cuidarlos de otras actividades con mayor impacto.</p>
                      <p className="title is-4 is-spaced">¿En qué trabajamos?</p>
                      <div className="columns">
                        <div className="column is-one-fifth has-text-centered">
                          <img src={icono_impacto_ambiental} alt="Cuidado del medio ambiente" />
                        </div>
                        <div className="column">
                          <p className="subtitle is-6">Estudios de impacto ambiental de zonas de escalada para saber realmente cómo se está afectando cierta zona</p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-fifth has-text-centered">
                          <img src={icono_baño} alt="Baños" />
                        </div>
                        <div className="column">
                          <p className="subtitle is-6">Apoyo en creación y habilitación de infraestructura que permita mitigar el impacto ambiental</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <div className="hero is-primary is-medium"
                      style={{
                        backgroundImage: `url(${
                          "/img/documentar_desktop.jpg"
                        })`,
                        backgroundPosition: `center center`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`
                      }}
                    >
                      <div className="hero-body">
                        <div className="container">
                          <h1 className="title">
                            Documentar
                          </h1>
                          <h2 className="subtitle">
                            Crear un canal para la gestión responsable de sectores de escalada
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-content ">
                    <div className="content">
                      <p className="title is-4 is-spaced">El desafío</p>
                      <p className="subtitle is-6 is-spaced">Generar un espacio centralizado para obtener información actualizada de rutas, accesos, acuerdos y grupos trabajando en cada sector.</p>
                      <p className="title is-4 is-spaced">¿En qué trabajamos?</p>
                      <div className="columns">
                        <div className="column is-one-fifth has-text-centered">
                          <img src={icono_app} alt="Aplicación móvil" />
                        </div>
                        <div className="column">
                          <p className="subtitle is-6">Aplicación móvil que permita revisar información actualizada: topos de escalada, acuerdos, cómo llegar a cierto sector, entre otras.</p>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-fifth has-text-centered">
                          <img src={icono_trekking} alt="Aplicación móvil" />
                        </div>
                        <div className="column">
                          <p className="subtitle is-6">Documentación de sectores para subir información actualizada a la aplicación</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Challenges