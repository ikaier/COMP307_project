import React, { Component } from "react";

import UserService from "../services/user.service";
import Text_page_top from "./text_page_top";
import Text_page_content from "./text_page_content";
import Navbar_white from "./navbar_white";
import Text_page_top_withimg from "./text_page_top_withimg";

export default class Card3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div >
        <Navbar_white/>
        <Text_page_top cotitle="UPDATES" title="Three Faculty Members Join the School of Computer Science" topic="NEW MEMBERS" time="2020-11-23"/>
        <Text_page_top_withimg pic="/card3.jpg"/>
        <Text_page_content publisher="admin" topic="ANNOUNCEMENT"
        content="Please welcome Robert Robere, David Rolnick, and David Becerra, who have recently joined the School of Computer Science as faculty members!

Robert Robere is joining McGill this fall as an Assistant Professor. Robert's research focus is in computational complexity theory, which seeks to organize algorithmic problems by the computational resources --- like running time or memory --- required to solve them. He is particularly interested in proving lower bounds on the complexity of concrete computational models, like boolean circuits, linear programs, propositional proofs, and communication protocols. Prior to joining McGill he was a member in the School of Mathematics at the Institute for Advanced Study, a postdoctoral research fellow at DIMACS at Rutgers University, and a research fellow at the Simons Institute for the Theory of Computing at UC Berkeley.

David Rolnick is joining the School of Computer Science at McGill University as an Assistant Professor and is a core academic member at Mila. He also serves as co-founder and chair of Climate Change AI, a volunteer group for tackling climate change using artificial intelligence. His research foci are deep learning theory, where he works on developing mathetmatical understanding of the properties of neural networks, and machine learning and climate change, with the goal of applying machine learning to mitigate and adapt to the climate crisis. Previously, he was an NSF Mathematical Sciences Postdoctoral Research Fellow at the University of Pennsylvania, working with Konrad Körding. He received his PhD in Applied Math from MIT in 2018, co-advised by Nir Shavit, Max Tegmark, and Ed Boyden. Before that, he was a Fulbright Scholar at the Freie Universität Berlin and an undergraduate at MIT.

David Becerra is currently a Faculty Lecturer at McGill University. His research focuses on the area of Computational Biology, Algorithms and Artificial Intelligence. He completed his doctoral studies in 2017 at McGill University and he was a post-doctoral fellow at University of Toronto from 2018 to 2020. David has more than six years of experience teaching at the university level. He also has experience supporting programming challenges and coding competitions. Given his interdisciplinary background, David is interested in making computer science more accessible to other fields.   "/>
       
      </div>
    );
  }
}
