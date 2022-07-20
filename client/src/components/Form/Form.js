import { Div, Label, Input } from './Form.styled';

const Form = ({ state, onChange }) => {
  return (
    <Div>
      <h3>Leave your contact</h3>
      <Label>
        {' '}
        Name
        <Input required name="name" value={state.name} onChange={onChange} />
      </Label>
      <Label>
        {' '}
        Email
        <Input required name="email" value={state.email} onChange={onChange} />
      </Label>
      <Label>
        {' '}
        Phone
        <Input
          required
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          name="phone"
          value={state.phone}
          onChange={onChange}
        />
      </Label>
      <Label>
        {' '}
        Address
        <Input
          required
          name="address"
          value={state.address}
          onChange={onChange}
        />
      </Label>
    </Div>
  );
};
export default Form;
