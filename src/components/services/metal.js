import React from 'react'
import metal from '../../assets/images/interior_services/metalpainting.jpg'
export default function Metal() {
  return (
    <div className='container-fluid d-flex flex-column shadow' id='metal'>
      <div className=''>
        <img src={metal} alt='interior_service' className='img-fluid'></img>
      </div>
      <div className='m-2 font_small'>
        <h1 className='title_sm'>Metal Painting Process</h1>
        <p>Refurbish your metal items at home such as grills, metal tools and equipment, basically any metal surface with our metal painting services at ApnaPainter. Depending on the area of application and the surface, there is an array of metallic paints to choose from. To give your walls a finished metallic lustrous look, a metallic wall paint would be the ideal choice. Some surfaces require specialised paints. For instance, metal surfaces such as a cooking grill require high heat paint that can withstand higher temperatures and for surfaces that tend to have moisture on them, rust-resistant paint is a must.</p>
        <h1 className='title_sm'>Different types of Primers and their uses</h1>
        <p>Exposure to air and moisture can cause the surface of metals such as iron and steel to get corroded and causes further damage not just on the surface but also to their structural integrity. Metal paints help protect metals from corrosion by forming a protective layer and giving them a nice shine. The type of primer you use depends on the condition of the metal object. If the metal surface is rusted, the surface needs to be cleaned properly and any rust or residue must be scraped off. Then it must be coated with a layer of zinc chromate primer before applying . Now, if the surface isn’t rusted, the regular full-bodied primer can be applied before applying the metallic gold paint. For ferrous surfaces such as your gate that aren’t galvanized, we use red oxide primer as an anti-rust coating before using metal gate paint colors. You can choose from a number of different colours for your metal objects from the metal point colour chart. Moreover, you can get your walls painted with special textured metallic paint for that glossy finish.</p>
        <h1 className='title_sm'>Primers</h1>
        <p>Primers for metals are an important part of paint system. Metal primers promote adhesion of paint as well as protects underneath metal from corrosion. Inhibitive pigments are used in the formulation of primers, to prevent eating away of the metal in the process of corossion. Rust Inhibitors in the primers basically contain Zinc compounds offers sacrificial protection to the base metal. How Zinc protects the steel beneath, can be explained by our material engineers in the team.They would love to!</p>
        <h1 className='title_sm'>Red Oxide Primers</h1>
        <p>Red oxide Zinc Chrome primers is a widely used priming system for ferrous (steel) surfaces. Suitable for both interior and exterior applications. Not suitable for galvanized steel, aluminium, copper or brass. Red Oxide Priming provides anti rust coating. Shade is typical red oxide. Room needs to be well ventilated and the primer needs to be kept away from flammable substances. Due to the consuderation of hex.</p>
      </div>
    </div>
  )
}
