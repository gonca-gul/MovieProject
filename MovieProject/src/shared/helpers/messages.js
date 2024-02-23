import { showMessage } from 'react-native-flash-message';

const showInfo = (text) => {
  showMessage({
    message: text,
    type: 'info',
  });
};
const showError = (text) => {
  showMessage({
    message: text,
    type: 'danger',
  });
};
const showSuccess = (text) => {
  showMessage({
    message: text,
    type: 'success',
  });
};
const showWarn = (text) => {
  showMessage({
    message: text,
    type: 'warning',
  });
};
export {
  showError, showWarn, showInfo, showSuccess,
};
