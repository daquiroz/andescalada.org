import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Navbar from '../components/Navbar'
import logo from '../img/logo_svg.svg'
import logo_blanco from '../img/logo_blanco.svg'
import logo_negro from "../../static/img/logo_negro.svg"
import logo_app from "../../static/img/logo_app.svg"
import isotipo_morado from "../../static/img/isotipo_morado.svg"
import isotipo_negro from "../../static/img/isotipo_negro.png"



export const BrandPageTemplate = ({
  contentComponent,
  title
}) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <Navbar />
        <div className="hero-body">
          <div className="container is-max-desktop ">

              <h1 className="is-size-2 is-size-3-mobile is-spaced is-uppercase mt-6 pt-6 title ">
                <span class="fading">Guía de Marca</span>
              </h1>
              <p>
                Estos líneamientos buscan una imagen consistente de la marca Andescalada, y están destinados para quienes necesitan hacer uso de esta, ya sea para comunicaciones internas y externas, desarrollo digital o diseño.
              </p>

              <section id="logo" className="pt-6 mt-6">
                <h2 className="title is-size-3 is-size-3-mobile is-spaced">
                  <span class="underline--magical"> Logo</span>
                </h2>
                <h3 className="title is-size-4 is-size-4-mobile is-spaced">
                  Versión original
                </h3>
                <div className="pt-3 pb-6">
                  <img className=" is-spaced" src={logo} alt="logo Andescalada" style={{ height: '200px' }} />
                </div>
              </section>

              <section id="logo-alternativas">
                <h3 className="title is-size-4 is-size-4-mobile is-spaced">
                  Versiones alternativas
                </h3>
                <div className="pt-3 pb-6">
                  <div className="columns">
                    <div className="column">
                      <h4 className="title is-size-5 is-size-5-mobile is-spaced"> Version negativo </h4>
                      <img className=" is-spaced p-4 has-background-dark" src={logo_blanco} alt="logo Andescalada" style={{ height: '200px' }} />
                    </div>
                    <div className="column">
                      <h4 className="title is-size-5 is-size-5-mobile is-spaced">  Version positiva </h4>
                      <img className=" is-spaced p-4" src={logo_negro} alt="logo Andescalada" style={{ height: '200px' }} />
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <h4 className="title is-size-5 is-size-5-mobile">Isotipo </h4>
                      <img className=" " src={logo_app} alt="logo Andescalada" style={{ height: '200px' }} />
                    </div>
                    <div className="column">
                      <h4 className="title is-size-5 is-size-5-mobile">Isotipo negro</h4>
                      <img className="p-6" src={isotipo_negro} alt="logo Andescalada" style={{ height: '200px' }} />
                    </div>
                    <div className="column">
                      <h4 className="title is-size-5 is-size-5-mobile">Isotipo morado</h4>
                      <img className="p-6" src={isotipo_morado} alt="logo Andescalada" style={{ height: '200px' }} />
                    </div>
                  </div>
                </div>
              </section>


              <section id="fonts" className="pt-6 mt-6">
                <h2 className="title is-size-3 is-size-3-mobile is-spaced">
                  <span class="underline--magical">  Tipografías </span>
                </h2>

                <h3 className="title is-size-4 is-size-4-mobile is-spaced">
                  Tipografía principal: Rubik
                </h3>

                <p className="title is-size-2 is-size-2-mobile has-text-weight-bold">
                  ABCDEFGHIJKLMOPQRSTUVWXYZ <br></br> 0123456789
                </p>

              </section>
              <section id="secondary-font" className="pt-6">

                <h3 className="title is-size-4 is-size-4-mobile is-spaced">
                  Tipografía secundaria: Antonio
                </h3>


                <p className="title is-size-2 is-size-2-mobile secondary-font has-text-weight-bold">
                  ABCDEFGHIJKLMOPQRSTUVWXYZ <br></br> 0123456789
                </p>

              </section>

              <section id="colors" className="pt-6 mt-6">
                <h2 className="title is-size-3 is-size-3-mobile is-spaced">
                  <span class="underline--magical"> Paleta de colores</span>
                </h2>
                <h3 className="title is-size-4 is-size-4-mobile is-spaced">
                  Colores principales
                </h3>
                  <div className="columns">
                    <div className="column">
                      <div class="purple-square"></div>
                    </div>
                    <div className="column">
                      <p className="">
                        CMYK: 89 / 89 / 22 / 8 <br></br>
                        RGB: 65 / 61 / 118 <br></br>
                        HEX: #413d76
                      </p>
                    </div>
                    <div className="column">
                      <div class="orange-square"></div>
                    </div>
                    <div className="column">
                      <p className="">
                        CMYK: 6 / 77 / 86 / 0 <br></br>
                        RGB: 199 / 95 / 61 <br></br>
                        HEX: #c75f3d
                      </p>
                    </div>
                  </div>
              </section>

              <section id="secondary-colors" className="pt-6 pb-6 mb-6">
                <h3 className="title is-size-4 is-size-4-mobile is-spaced">
                  Colores complementarios
                </h3>
                  <div className="columns">
                    <div className="column">
                      <div class="mustard-square"></div>
                    </div>
                    <div className="column">
                      <p className="">
                        CMYK: 1 / 34 / 72 / 0 <br></br>
                        RGB: 231 / 176 / 97 <br></br>
                        HEX: #e7b061
                      </p>
                    </div>
                    <div className="column">
                      <div class="cyan-square"></div>
                    </div>
                    <div className="column">
                      <p className="">
                        CMYK: 50 / 12 / 0 / 0 <br></br>
                        RGB: 140 / 186 / 231  <br></br>
                        HEX: #8cbae7
                      </p>
                    </div>
                  </div>
              </section>

              <section id="personality" className="pt-6 mt-6">
                <h2 className="title is-size-3 is-size-3-mobile is-spaced">
                  <span class="underline--magical"> Personalidad </span>
                </h2>
                <h3 className="title is-size-4 is-size-4-mobile is-spaced">
                  Valores principales
                </h3>
                <h4 className="title is-size-4 is-size-4-mobile secondary-font has-text-weight-bold andescalada-orange-dark">
                  Colaborativa
                </h4>
                <p>
                  Los mejores resultados vienen del trabajo colectivo, por lo que el incluir diferentes actores y distintas visiones es clave para avanzar en soluciones.
                </p>
                <h4 className="title is-size-4 is-size-4-mobile pt-4 secondary-font andescalada-cyan-dark has-text-weight-bold">
                  Propositiva
                </h4>
                <p>
                  Proactivamente analizamos y buscamos soluciones a los desafíos y problemáticas que se presentan en la escalada.
                </p>
                <h4 className="title is-size-4 is-size-4-mobile pt-4 secondary-font andescalada-mustard-dark has-text-weight-bold">
                  Responsable
                </h4>
                <p>
                  El trabajo que realizamos lo hacemos con la mayor calidad, disciplina y de forma responsable.
                </p>
              </section>
              <section id="personality-secondary" className="pt-6">

                <h3 className="title is-size-4 is-size-4-mobile is-spaced">
                  Valores complementarios
                </h3>
                <h4 className="title is-size-4 is-size-4-mobile secondary-font andescalada-orange-dark has-text-weight-bold">
                  Aventurera
                </h4>
                <p>

                </p>
                <h4 className="title is-size-4 is-size-4-mobile pt-4 secondary-font andescalada-cyan-dark has-text-weight-bold">
                  Cercana
                </h4>
                <p>

                </p>
                <h4 className="title is-size-4 is-size-4-mobile pt-4 secondary-font andescalada-mustard-dark has-text-weight-bold">
                  Activista
                </h4>
                <p>

                </p>
              </section>

        </div>

      </div>
    </div>
  )
}



BrandPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const BrandPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <BrandPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  )
}

BrandPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BrandPage

export const brandPageQuery = graphql`
  query BrandPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
