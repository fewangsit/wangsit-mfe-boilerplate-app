import { Focus, ToastService, Tooltip, WangsVue } from '@fewangsit/wangsvue';
import preset from '@fewangsit/wangsvue-presets/wangsvue';
import createVueMicroApp from '@microtsm/vue';

import App from '@/App.vue';

import '@/assets/css/main.css';
import '@fewangsit/wangsvue/style.css';
import '@fewangsit/wangsvue-presets/wangsvue/style.css';
import router from './router';

export const { mount, unmount } = createVueMicroApp(App, {
  el: '#app', // Only used for standalone development
  setupInstance(app) {
    app.use(WangsVue, {
      preset,
      defaultProps: {
        FieldWrapper: {
          showOptionalText: true,
        },
      },
      locale: {
        global: {
          monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          dayNames: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        },
        components: {
          FieldWrapper: {
            labelRequired: '*',
            labelOptional: '(optional)',
          },
          InputText: {
            urlFormatInvalidText: 'URL format is incorrect',
            emailFormatInvalidText: 'Email format is incorrect',
            defaultPlaceholder: 'Enter {label}',
            alreadyExistInvalidText: '{label} already exist',
            emptyInvalidText: '{label} must not be empty',
            exceedMaxLengthInvalidText: 'Max. {maxLength} characters',
            includeSpecialCharsInvalidText:
              'Cannot include any special characters',
          },
          DialogConfirm: {
            nonActionableCloseButtonLabel: 'Close',
            actionableCloseButtonLabel: 'Cancel',
            defaultConfirmMessage: 'Are you sure you want to continue?',
            defaultConfirmLabel: 'Continue',
          },
          CustomColumn: {
            resetDefaultText: 'Reset to Default',
          },
          ButtonSearch: {
            searchPlaceholder: 'Search',
          },
          FilterContainer: {
            applyText: 'Apply',
            clearFieldText: 'Clear Field',
          },
          MultiSelect: {
            filterPlaceholder: 'Search',
            loadingPlaceholder: 'Loading...',
            inputPlaceholder: 'Select {lowercaseLabel}',
            emptySelectionErrorMessage: 'You must pick {formattedLabel}',
          },
          Dropdown: {
            filterPlaceholder: 'Search',
            loadingPlaceholder: 'Loading...',
            inputPlaceholder: 'Select {lowercaseLabel}',
            emptySelectionErrorMessage: 'You must pick {formattedLabel}',
          },
          InputCurrency: {
            emptyInputErrorMessage: '{label} must not be empty',
          },

          TextArea: {
            defaultPlaceholder: 'Enter {label}',
            emptyInvalidText: '{label} must not be empty',
            exceedMaxLengthInvalidText: 'Max. {maxLength} characters',
          },

          InputRangeNumber: {
            minPlaceholder: 'Enter',
            maxPlaceholder: 'Enter',
          },

          DialogForm: {
            cancelBtnLabel: 'Cancel',
            clearBtnLabel: 'Clear Field',
            stayCheckboxLabel: 'Stay on this form after submitting',
            submitBtnLabel: 'Submit',
            asideRightCollapsedButtonLabel: 'See existing data >',
            asideRightExpandedButtonLabel: 'Close <',
          },

          InputPhoneNumber: {
            defaultPlaceholder: 'Enter phone number',
          },

          InputNumber: {
            defaultPlaceholder: 'Enter {label}',
            alreadyExistInvalidText: '{label} already exist',
            emptyInvalidText: '{label} must not be empty',
          },

          Calendar: {
            defaultPlaceholder: 'Select date',
            emptyInvalidText: 'You must pick {formattedLabel}',
            cancelFooterButtonLabel: 'Cancel',
            applyFooterButtonLabel: 'Apply',
          },

          Menu: {
            noOptionLabel: 'No Option Available',
          },

          DataTable: {
            downloadingMessage: 'Downloading...',
            falseText: 'No',
            trueText: 'Yes',
            paginationReportFound:
              'Showing {first} to {last} of {totalRecords}',
            paginationReportNotFound: 'No Data Found',
          },

          ButtonBulkAction: {
            allRecordSelected: 'All {naming} Selected',
            selectAllRecords: 'Select All ({totalRecords} data)',
            currentSelectionMessage: '{length} {naming} Selected',
          },

          ButtonDownload: {
            downloadingMessage: 'Downloading...',
            falseText: 'No',
            trueText: 'Yes',
          },

          ImageCompressor: {
            cropperCtrlScrollInfo: 'Use Ctrl + Scroll to zoom the cropper',
            cropperTwoFingerInfo: 'Use two fingers to move the cropper',
            cropDialogHeader: 'Adjust Photo',
            imageTypeRequirement: 'Must be image format',
            maxSizeRequirement: 'Max. 1 MB',
            cancelCropLabel: 'Cancel',
            applyCropLabel: 'Apply',
            changeImageLabel: 'Change Image',
          },

          Toast: {
            successMessage: 'Success, {message}',
            errorMessage: 'Error, {message}',
            networkErrorMessage: ' Please check your connection and try again.',
          },
        },
      },
    });

    app.use(ToastService);
    app.use(router);

    app.directive('Tooltip', Tooltip);
    app.directive('focus', Focus);
  },
});
