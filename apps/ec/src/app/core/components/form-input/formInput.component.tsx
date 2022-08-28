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
type FormInputProps<C extends React.ElementType> = {
  label: string;
} & React.ComponentPropsWithoutRef<C>;

// @Component
const AppFormInput = <C extends React.ElementType>({
  label,
  ...props
}: FormInputProps<C>) => {
  const { formInput } = useFormInputStyles();

  return (
    <div className={formInput}>
      <label>{label}</label>
      <input required {...props} />
    </div>
  );
};

export default AppFormInput;
