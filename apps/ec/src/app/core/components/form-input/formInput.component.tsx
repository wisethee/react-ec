// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// COmponent Styles
const useFormInputStyles = createUseStyles(({ spacing }: Theme) => ({
  formInput: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: spacing[8],
  },
}));

// Component Types
type FormInputProps = {
  label: string;
  name: string;
  value: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

// @Component
const AppFormInput = ({
  label,
  name,
  value,
  type,
  onChange,
}: FormInputProps) => {
  const props = { label, name, value, type, onChange };
  const { formInput } = useFormInputStyles();

  return (
    <div className={formInput}>
      <label>{label}</label>
      <input required {...props} />
    </div>
  );
};

export default AppFormInput;
