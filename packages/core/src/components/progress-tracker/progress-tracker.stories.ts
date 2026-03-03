import { Meta, StoryObj } from '@storybook/web-components';
import { ProgressTrackerComponent } from './progress-tracker';
import { html } from 'lit';

const meta: Meta = {
    component: 'admiralty-progress-tracker',
    title: 'Progress Tracker',
    parameters: {
        actions: {
            handles: ['stepClicked', 'stepValidationRequested'],
        },
    },
};

export default meta;

type Story = StoryObj<ProgressTrackerComponent>;

export const Default: Story = {
    render: () => html`
    <admiralty-progress-tracker allow-back-navigation>
        <admiralty-progress-tracker-step
            step-id="location"
            step-title="Choose location"
            status="complete"
            summary="Specify geographic coordinates"
        >
            <ul slot="bullet-summaries">
                <li>Latitude: 51deg 30m 35s N</li>
                <li>Longitude: 0deg 7m 5s W</li>
            </ul>
        </admiralty-progress-tracker-step>
        
        <admiralty-progress-tracker-step
            step-id="object"
            step-title="Choose object"
            status="complete"
            summary="Select from available celestial objects"
        >
            <ul slot="bullet-summaries">
                <li>Sun, Moon, or Venus</li>
            </ul>
        </admiralty-progress-tracker-step>
        
        <admiralty-progress-tracker-step
            step-id="information-type"
            step-title="Choose information type"
            status="current"
            summary="Meridian Transit, Depression"
        ></admiralty-progress-tracker-step>
        
        <admiralty-progress-tracker-step
            step-id="date"
            step-title="Choose date"
            status="upcoming"
        ></admiralty-progress-tracker-step>
        
        <admiralty-progress-tracker-step
            step-id="download"
            step-title="Download data"
            status="upcoming"
        ></admiralty-progress-tracker-step>
    </admiralty-progress-tracker>
  `,
};

export const AllComplete: Story = {
    render: () => html`
    <admiralty-progress-tracker>
        <admiralty-progress-tracker-step
            step-id="step1"
            step-title="Account creation"
            status="complete"
            summary="Email verified"
        ></admiralty-progress-tracker-step>
        
        <admiralty-progress-tracker-step
            step-id="step2"
            step-title="Payment setup"
            status="complete"
            summary="Card added"
        ></admiralty-progress-tracker-step>
        
        <admiralty-progress-tracker-step
            step-id="step3"
            step-title="Verification"
            status="complete"
        ></admiralty-progress-tracker-step>
    </admiralty-progress-tracker>
  `,
};

export const WithNavigation: Story = {
    render: () => {
        const template = html`
        <admiralty-progress-tracker allow-back-navigation allow-forward-navigation>
            <admiralty-progress-tracker-step
                step-id="step1"
                step-title="Requirements"
                status="complete"
                summary="Documents uploaded"
            ></admiralty-progress-tracker-step>
            
            <admiralty-progress-tracker-step
                step-id="step2"
                step-title="Review"
                status="current"
                summary="In progress"
            ></admiralty-progress-tracker-step>
            
            <admiralty-progress-tracker-step
                step-id="step3"
                step-title="Approval"
                status="upcoming"
            ></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
    `;

        setTimeout(() => {
            const element = document.querySelector('admiralty-progress-tracker');
            element?.addEventListener('stepClicked', (evt: any) => {
                alert(`Navigating to step: ${evt.detail.stepId}`);
            });
        }, 0);

        return template;
    },
};

export const ForwardNavigationOnly: Story = {
    render: () => {
        const template = html`
        <admiralty-progress-tracker allow-back-navigation="false" allow-forward-navigation>
            <admiralty-progress-tracker-step
                step-id="step1"
                step-title="Requirements"
                status="complete"
                summary="Documents uploaded"
            ></admiralty-progress-tracker-step>
            
            <admiralty-progress-tracker-step
                step-id="step2"
                step-title="Review"
                status="current"
                summary="In progress"
            ></admiralty-progress-tracker-step>
            
            <admiralty-progress-tracker-step
                step-id="step3"
                step-title="Approval"
                status="upcoming"
            ></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
    `;

        setTimeout(() => {
            const element = document.querySelector('admiralty-progress-tracker');
            element?.addEventListener('stepClicked', (evt: any) => {
                alert(`Navigating to step: ${evt.detail.stepId}`);
            });
        }, 0);

        return template;
    },
};

export const BackNavigationOnly: Story = {
    render: () => {
        const template = html`
        <admiralty-progress-tracker allow-back-navigation>
            <admiralty-progress-tracker-step
                step-id="step1"
                step-title="Requirements"
                status="complete"
                summary="Documents uploaded"
            ></admiralty-progress-tracker-step>
            
            <admiralty-progress-tracker-step
                step-id="step2"
                step-title="Review"
                status="current"
                summary="In progress"
            ></admiralty-progress-tracker-step>
            
            <admiralty-progress-tracker-step
                step-id="step3"
                step-title="Approval"
                status="upcoming"
            ></admiralty-progress-tracker-step>
        </admiralty-progress-tracker>
    `;

        setTimeout(() => {
            const element = document.querySelector('admiralty-progress-tracker');
            element?.addEventListener('stepClicked', (evt: any) => {
                alert(`Navigating to step: ${evt.detail.stepId}`);
            });
        }, 0);

        return template;
    },
};

export const NoBackNavigation: Story = {
    render: () => html`
    <admiralty-progress-tracker allow-back-navigation="false">
        <admiralty-progress-tracker-step
            step-id="location"
            step-title="Choose location"
            status="complete"
            summary="Specify geographic coordinates"
        >
            <ul slot="bullet-summaries">
                <li>Latitude: 51deg 30m 35s N</li>
                <li>Longitude: 0deg 7m 5s W</li>
            </ul>
        </admiralty-progress-tracker-step>
        
        <admiralty-progress-tracker-step
            step-id="object"
            step-title="Choose object"
            status="complete"
            summary="Select from available celestial objects"
        >
            <ul slot="bullet-summaries">
                <li>Sun, Moon, or Venus</li>
            </ul>
        </admiralty-progress-tracker-step>
        
        <admiralty-progress-tracker-step
            step-id="information-type"
            step-title="Choose information type"
            status="current"
            summary="Meridian Transit, Depression"
        ></admiralty-progress-tracker-step>
        
        <admiralty-progress-tracker-step
            step-id="date"
            step-title="Choose date"
            status="upcoming"
        ></admiralty-progress-tracker-step>
        
        <admiralty-progress-tracker-step
            step-id="download"
            step-title="Download data"
            status="upcoming"
        ></admiralty-progress-tracker-step>
    </admiralty-progress-tracker>
  `,
};

export const WithErrors: Story = {
    render: () => html`
    <admiralty-progress-tracker allow-back-navigation>
        <admiralty-progress-tracker-step
            step-id="step1"
            step-title="Account Setup"
            status="complete"
            summary="Username created"
        ></admiralty-progress-tracker-step>
        
        <admiralty-progress-tracker-step
            step-id="step2"
            step-title="Email Verification"
            status="error"
            error-message="Email address is invalid. Please check and try again."
        ></admiralty-progress-tracker-step>
        
        <admiralty-progress-tracker-step
            step-id="step3"
            step-title="Profile Details"
            status="upcoming"
        ></admiralty-progress-tracker-step>
        
        <admiralty-progress-tracker-step
            step-id="step4"
            step-title="Preferences"
            status="upcoming"
        ></admiralty-progress-tracker-step>
    </admiralty-progress-tracker>
  `,
};
export const WithValidation: Story = {
    render: () => {
        const template = html`
        <div>
            <p style="margin-bottom: 16px; font-size: 14px; color: #666;">
                Try navigating forward or backward. The component will validate the current step before allowing navigation.
                Click alerts if you navigate while a step has validation issues.
            </p>
            <admiralty-progress-tracker 
                allow-back-navigation 
                allow-forward-navigation
                validate-before-navigation
            >
                <admiralty-progress-tracker-step
                    step-id="step1"
                    step-title="Account Setup"
                    status="complete"
                    summary="Username created"
                ></admiralty-progress-tracker-step>
                
                <admiralty-progress-tracker-step
                    step-id="step2"
                    step-title="Email Verification"
                    status="error"
                    error-message="Email address is invalid. Please check and try again."
                ></admiralty-progress-tracker-step>
                
                <admiralty-progress-tracker-step
                    step-id="step3"
                    step-title="Profile Details"
                    status="upcoming"
                ></admiralty-progress-tracker-step>
                
                <admiralty-progress-tracker-step
                    step-id="step4"
                    step-title="Preferences"
                    status="upcoming"
                ></admiralty-progress-tracker-step>
            </admiralty-progress-tracker>
        </div>
    `;

        setTimeout(() => {
            const element = document.querySelector('admiralty-progress-tracker');
            if (element) {
                element.addEventListener('stepValidationRequested', (evt: any) => {
                    alert(
                        `Validation failed for step: ${evt.detail.stepId}\n\n` +
                        'Navigation blocked until validation passes.'
                    );
                });

                element.addEventListener('stepClicked', (evt: any) => {
                    alert(`Successfully navigated to step: ${evt.detail.stepId}`);
                });
            }
        }, 0);

        return template;
    },
};

export const ValidationWithBackwardNavigation: Story = {
    render: () => {
        const template = html`
        <div>
            <p style="margin-bottom: 16px; font-size: 14px; color: #666;">
                Demonstrates validation on backward navigation. Try to go back from the current step.
            </p>
            <admiralty-progress-tracker 
                allow-back-navigation 
                validate-before-navigation
            >
                <admiralty-progress-tracker-step
                    step-id="location"
                    step-title="Choose location"
                    status="complete"
                    summary="Coordinates set"
                >
                    <ul slot="bullet-summaries">
                        <li>Latitude: 51.5°N</li>
                        <li>Longitude: 0.1°W</li>
                    </ul>
                </admiralty-progress-tracker-step>
                
                <admiralty-progress-tracker-step
                    step-id="object"
                    step-title="Choose object"
                    status="current"
                    summary="Requires selection"
                ></admiralty-progress-tracker-step>
                
                <admiralty-progress-tracker-step
                    step-id="date"
                    step-title="Choose date"
                    status="upcoming"
                ></admiralty-progress-tracker-step>
            </admiralty-progress-tracker>
        </div>
    `;

        setTimeout(() => {
            const element = document.querySelector('admiralty-progress-tracker');
            if (element) {
                element.addEventListener('stepValidationRequested', (evt: any) => {
                    alert(
                        `Validation check on step: ${evt.detail.stepId}\n` +
                        `Valid: ${evt.detail.isValid}`
                    );
                });

                element.addEventListener('stepClicked', (evt: any) => {
                    alert(`Navigated to step: ${evt.detail.stepId}`);
                });
            }
        }, 0);

        return template;
    },
};