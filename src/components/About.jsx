import React from "react";

import '../style/About.css'; 

function About(props) {
  return (
    props.display ?
    <div className={`about${props.scroll ? ' about-small' : ''}${!props.display ? ' display' : ''}`}>
      <h2>A propos</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae tempora vel quisquam tenetur totam! Atque error dolore fugiat velit consectetur, quas, quasi sapiente in explicabo quo eum veritatis distinctio.
      Quidem nulla atque officia ad quia fuga eius laudantium eos sunt temporibus iure accusamus dicta, nisi quod? Quos sint est harum natus labore temporibus, recusandae provident, aspernatur voluptas inventore veritatis!
      Vel in expedita praesentium exercitationem dignissimos facere nemo, provident doloremque hic deserunt saepe officia, ad, incidunt molestias minima ipsum laboriosam maiores laborum sit ducimus dolor dolorum corporis? Ducimus, quas eaque!
      Voluptas incidunt rem, velit laboriosam eum magnam cumque doloribus corporis? Beatae, harum? Eum iste in modi optio, accusantium labore culpa soluta repudiandae! Nesciunt totam molestiae et dicta delectus provident consequatur?
      Molestias, quod! Veritatis aliquam, omnis ad voluptatum ea explicabo qui nesciunt perspiciatis adipisci quaerat dolorum corrupti reiciendis quis eveniet nemo eum odio fugit, quidem ut! Sunt fugiat quas voluptatum dolores.
      Obcaecati sint facere odio similique eum delectus quia quidem dolorem eaque voluptas accusantium eius, tenetur illo cumque, officiis ab quaerat, repellendus distinctio deleniti nostrum quos? Aut vero et expedita ducimus.</p>
    </div>
    :
    <div className={`about${props.scroll ? ' about-small' : ''}${!props.display ? ' display' : ''}`}></div>
  );
}

export default About;
