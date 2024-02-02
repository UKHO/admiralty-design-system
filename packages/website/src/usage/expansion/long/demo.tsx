import React from "react";
import { AdmiraltyExpansion } from "@ukho/admiralty-react";

export default function Demo() {
  return (
      <AdmiraltyExpansion heading="Expansion Heading that is really really long" expanded={false}
                           align-heading-right="false" hide-border="false">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt
          gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa.
          Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec
          ipsum at arcu viverra eleifend. Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque,
          in luctus tortor enim iaculis neque.</p>
        <p>Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel,
          fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat
          vel bibendum quis, malesuada non quam. Etiam in bibendum lacus. In hac habitasse platea dictumst. Proin justo
          nunc, gravida nec magna id, faucibus placerat dui. Phasellus luctus viverra imperdiet. Maecenas sed lorem
          ligula. Maecenas nec velit ut lectus porta ullamcorper vel et ante. Sed pretium metus vitae sagittis
          tincidunt. Integer aliquam consectetur ex et tempus. Aliquam faucibus ullamcorper libero.</p>
      </AdmiraltyExpansion>);
}
