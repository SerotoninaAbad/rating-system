import loadScript from '../loadScript';
import { waitFor } from '@testing-library/react';

describe('<LoadSrcipt />', () => {
  const LOAD_FAILURE_SRC =
    'https://failure.whenloading.com/maps/api/js?key=AIzaSyDcKY_hu2-4Ct4muHl0AsW04VFynjngop4';
  const LOAD_SUCCESS_SRC =
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyDcKY_hu2-4Ct4muHl0AsW04VFynjngop4';

  beforeAll(() => {
    Object.defineProperty(global.HTMLScriptElement.prototype, 'src', {
      set(value) {
        if (value === LOAD_FAILURE_SRC) {
          setTimeout(() => this.onerror(''));
        } else if (value === LOAD_SUCCESS_SRC) {
          setTimeout(() => this.onload());
        }
      },
    });
  });

  it('Add script tag to header', async () => {
    await loadScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDcKY_hu2-4Ct4muHl0AsW04VFynjngop4'
    );

    expect(document.head.innerHTML).toBe('<script defer=""></script>');
  });

  it('Promise reject on error', async () => {
    let failed = false;
    loadScript(
      'https://failure.whenloading.com/maps/api/js?key=AIzaSyDcKY_hu2-4Ct4muHl0AsW04VFynjngop4'
    ).catch(() => {
      failed = true;
    });

    await waitFor(() => {
      expect(failed).toBeTruthy();
    });
  });
});
