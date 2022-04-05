import { graphql } from "gatsby"
import { arrayOf, bool, number, shape, string, object } from "prop-types"

export const ProfileType = {
  about: string,
  // budget: shape({
  //   currency: string,
  //   default: number,
  //   max: number,
  //   min: number,
  // }),
  // company: string,
  focus: string,
  focus_url: string,
  // for_hire: bool,
  image: shape({
    childImageSharp: object,
    publicURL: string,
  }),
  initials: string,
  location: string,
  name: string,
  profession: string,
  // relocation: bool,
  skills: arrayOf(string),
  tools: arrayOf(string),
}

export const query = graphql`
  fragment ProfileFragment on ProfileYaml {
    about
    # budget {
    #   currency
    #   default
    #   max
    #   min
    # }
    # company
    # focus
    # focus_url
    # for_hire
    image {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 144, height: 144, quality: 85)
      }
      # publicURL
    }
    initials
    location
    name
    profession
    # relocation
    skills
    tools
  }
`
