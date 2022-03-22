import { DialogueComponent } from './dialogue.component';

export default {
  title: 'Dialogue',
  component: DialogueComponent,
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [DialogueComponent],
  },
  template: `<ukho-dialogue>
      <h3>Basic Title</h3>
      <div>Some content in the dialogue</div>
    </ukho-dialogue>`,
});

basic.story = {
  name: 'default (information)',
};

export const error = () => ({
  moduleMetadata: {
    declarations: [DialogueComponent],
  },
  template: `<ukho-dialogue type="error">
        <h3>Error</h3>
        <div>You did something wrong</div>
      </ukho-dialogue>`,
});

error.story = {
  name: 'error',
};

export const success = () => ({
  moduleMetadata: {
    declarations: [DialogueComponent],
  },
  template: `<ukho-dialogue type="success">
        <h3>Your details have been saved</h3>
        <div>Thanks for updating your contact details. Our system has now been updated.</div>
      </ukho-dialogue>`,
});

success.story = {
  name: 'success',
};


export const warning = () => ({
  moduleMetadata: {
    declarations: [DialogueComponent],
  },
  template: `<ukho-dialogue type="warning">
        <h3>Check your application before submitting</h3>
        <div>Once you’ve submitted the details of your application you won’t be able to go back and change anything. Take a moment to double check everything is correct before submitting.</div>
      </ukho-dialogue>`,
});

warning.story = {
  name: 'warning',
};

export const long = () => ({
  moduleMetadata: {
    declarations: [DialogueComponent],
  },
  template: `<ukho-dialogue>
      <h3>Basic Title</h3>
      <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend.</p></div>
      <div><p>Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus https://www.example.com/?test=DD4453ADF31B80239DE00C39C90FFC23DD48994A26522F983F25CAEE41CB125426F7905EE1736F7259DD5A3940E0EE217CBD836F39439BF82E3D37A11E21DBBB tortor enim iaculis neque.Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam.</p></div>
      <div><p>Etiaminbibendumlacus.Inhachabitasseplateadictumst.Proinjustonunc,gravidanecmagnaid,faucibusplaceratdui.Phasellusluctusviverraimperdiet.Maecenassedloremligula.Maecenasnecvelitutlectusportaullamcorperveletante.Sedpretiummetusvitaesagittistincidunt.Integeraliquamconsecteturexettempus.Aliquamfaucibusullamcorperlibero.</p></div>
    </ukho-dialogue>`,
});

long.story = {
  name: 'Wrap text',
};
