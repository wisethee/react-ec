// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Component Styles
const useFormInputStyles = createUseStyles(
  ({ colors, typography, spacing }: Theme) => ({
    formInput: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: spacing[8],
    },
    inputLabel: {
      fontSize: typography.fontSize.labelMedium,
      color: colors.grey[500],
    },
    input: {
      width: '100%',
      padding: [spacing[1], spacing[0]],
      boxSizing: 'border-box',
      border: 'none',
      borderBottomColor: colors.grey[500],
      borderBottomStyle: 'solid',
      borderBottomWidth: '2px',
      color: colors.grey[500],
      outline: 'none',
    },
  })
);

// Component Types
type FormInputProps<C extends React.ElementType> = {
  label: string;
} & React.ComponentPropsWithoutRef<C>;

// @Component
const AppFormInput = <C extends React.ElementType>({
  label,
  ...props
}: FormInputProps<C>) => {
  const { formInput, inputLabel, input } = useFormInputStyles();

  return (
    <div className={formInput}>
      <label className={inputLabel}>{label}</label>
      <input className={input} required {...props} />
    </div>
  );
};

export default AppFormInput;
