// utils/loanApplicationUtils.ts
import { ImageSourcePropType } from 'react-native';
import { TextConstants } from "app/constants/textConstants";


export interface LoanApplicationStatusProps {
    image: ImageSourcePropType;
    heading: string;
    description: string;
    buttons: { label: string, onPress: () => void }[];
    applicationId?: string;
}

export const getLoanApplicationStatusProps = (response: any): LoanApplicationStatusProps => {
    switch (response.status) {
        case '404':
            return {
                image: require('app/assets/images/404.png'),
                heading: TextConstants.defaultError,
                description: TextConstants.defaultErrorDescription,
                buttons: [
                    { label: TextConstants.backBtnText, onPress: () => { /* Handle Go Back */ } },
                    { label: TextConstants.tryAgainBtnText, onPress: () => { /* Handle Try Again */ } }
                ]
            };

        case '200':
            return {
                image: require('app/assets/images/restricted.png'),
                heading: TextConstants.processCompletedError,
                description: TextConstants.processCompletedDescription,
                buttons: [],
                applicationId: '12345678'
            };

        case '403':
            return {
                image: require('app/assets/images/restricted.png'),
                heading: TextConstants.restrictionError,
                description: TextConstants.restrictionErrorDescription,
                buttons: []
            };

        case '500':
            return {
                image: require('app/assets/images/application-found.png'),
                heading: TextConstants.activeLoanError,
                description: TextConstants.activeLoanErrorDescription,
                buttons: []
            };

        default:
            return {
                image: require('app/assets/images/404.png'),
                heading: TextConstants.defaultError,
                description: TextConstants.defaultErrorDescription,
                buttons: []
            };
    }
};
