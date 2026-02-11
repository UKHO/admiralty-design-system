import { html } from 'lit';

const exampleSteps = [
    {
        id: 'location',
        title: 'Choose location',
        status: 'complete',
        summary: 'Specify geographic coordinates',
        bulletSummaries: ['Latitude: 51deg 30m 35s N', 'Longitude: 0deg 7m 5s W'],
    },
    {
        id: 'object',
        title: 'Choose object',
        status: 'complete',
        summary: 'Select from available celestial objects',
        bulletSummaries: ['Sun, Moon, or Venus'],
    },
    {
        id: 'information-type',
        title: 'Choose information type',
        status: 'current',
        summary: 'Meridian Transit, Depression',
    },
    {
        id: 'date',
        title: 'Choose date',
        status: 'upcoming',
    },
    {
        id: 'download',
        title: 'Download data',
        status: 'upcoming',
    },
];

export default {
    title: 'Components/Progress Tracker',
    component: 'admiralty-progress-tracker',
};

export const Default = () => {
    const element = document.createElement('admiralty-progress-tracker') as any;
    element.steps = exampleSteps;
    element.allowBackNavigation = true;
    element.addEventListener('stepClicked', (evt: any) => {
        console.log('Step clicked:', evt.detail);
    });
    return element;
};

export const AllComplete = () => {
    const element = document.createElement('admiralty-progress-tracker') as any;
    element.steps = [
        { id: 'step1', title: 'Account creation', status: 'complete', summary: 'Email verified' },
        { id: 'step2', title: 'Payment setup', status: 'complete', summary: 'Card added' },
        { id: 'step3', title: 'Verification', status: 'complete' },
    ];
    return element;
};

export const WithNavigation = () => {
    const element = document.createElement('admiralty-progress-tracker') as any;
    element.steps = [
        { id: 'step1', title: 'Requirements', status: 'complete', summary: 'Documents uploaded' },
        { id: 'step2', title: 'Review', status: 'current', summary: 'In progress' },
        { id: 'step3', title: 'Approval', status: 'upcoming' },
    ];
    element.allowBackNavigation = true;
    element.addEventListener('stepClicked', (evt: any) => {
        alert(`Navigating to step: ${evt.detail.stepId}`);
    });
    return element;
};

export const NoBackNavigation = () => {
    const element = document.createElement('admiralty-progress-tracker') as any;
    element.steps = exampleSteps;
    element.allowBackNavigation = false;
    return element;
};

export const WithValidation = () => {
    const container = document.createElement('div');
    const element = document.createElement('admiralty-progress-tracker') as any;

    let currentSteps: any[] = [
        { id: 'step1', title: 'Personal Info', status: 'complete', summary: 'Name and email provided' },
        { id: 'step2', title: 'Address', status: 'current', summary: '' },
        { id: 'step3', title: 'Payment', status: 'upcoming' },
        { id: 'step4', title: 'Confirmation', status: 'upcoming' },
    ];

    element.steps = currentSteps;
    element.allowBackNavigation = true;
    element.validateBeforeNavigation = true;

    // Mock validation - fails on first try, succeeds on second
    let validationAttempts = 0;
    element.validateStep = (stepId: string, stepIndex: number) => {
        validationAttempts++;
        const isValid = validationAttempts % 2 === 0; // Alternate between valid/invalid

        if (!isValid) {
            // Show error state
            currentSteps = currentSteps.map(step =>
                step.id === stepId
                    ? { ...step, status: 'error', errorMessage: 'Please complete all required fields' }
                    : step
            );
            element.steps = [...currentSteps];
        } else {
            // Clear error
            currentSteps = currentSteps.map(step =>
                step.id === stepId && step.status === 'error'
                    ? { ...step, status: 'current', errorMessage: undefined }
                    : step
            );
            element.steps = [...currentSteps];
        }

        return isValid;
    };

    element.addEventListener('stepClicked', (evt: any) => {
        console.log('Step clicked with validation:', evt.detail);
    });

    element.addEventListener('stepValidationRequested', (evt: any) => {
        console.log('Validation requested:', evt.detail);
    });

    const info = document.createElement('p');
    info.textContent = 'Try clicking forward - first attempt will fail validation, second will succeed';
    info.style.cssText = 'margin-bottom: 20px; padding: 10px; background: #f0f0f0; border-radius: 4px;';

    container.appendChild(info);
    container.appendChild(element);
    return container;
};

export const WithErrors = () => {
    const element = document.createElement('admiralty-progress-tracker') as any;
    element.steps = [
        { id: 'step1', title: 'Account Setup', status: 'complete', summary: 'Username created' },
        { id: 'step2', title: 'Email Verification', status: 'error', errorMessage: 'Email address is invalid. Please check and try again.' },
        { id: 'step3', title: 'Profile Details', status: 'upcoming' },
        { id: 'step4', title: 'Preferences', status: 'upcoming' },
    ];
    element.allowBackNavigation = true;
    return element;
};

export const FormIntegrationExample = () => {
    const container = document.createElement('div');
    container.style.cssText = 'max-width: 800px;';

    const element = document.createElement('admiralty-progress-tracker') as any;

    const formData: any = {
        name: '',
        email: '',
        address: '',
        payment: ''
    };

    let currentSteps: any[] = [
        { id: 'personal', title: 'Personal Information', status: 'current', summary: '' },
        { id: 'address', title: 'Address', status: 'upcoming' },
        { id: 'payment', title: 'Payment', status: 'upcoming' },
        { id: 'review', title: 'Review', status: 'upcoming' },
    ];

    element.steps = currentSteps;
    element.allowBackNavigation = true;
    element.validateBeforeNavigation = true;

    element.validateStep = (stepId: string) => {
        if (stepId === 'personal') {
            return formData.name && formData.email;
        }
        if (stepId === 'address') {
            return formData.address;
        }
        if (stepId === 'payment') {
            return formData.payment;
        }
        return true;
    };

    element.addEventListener('stepClicked', (evt: any) => {
        const { stepId } = evt.detail;
        const stepIndex = currentSteps.findIndex(s => s.id === stepId);

        currentSteps = currentSteps.map((step, idx) => {
            if (idx < stepIndex) {
                return { ...step, status: 'complete' };
            } else if (step.id === stepId) {
                return { ...step, status: 'current', errorMessage: undefined };
            } else {
                return { ...step, status: 'upcoming' };
            }
        });

        element.steps = [...currentSteps];
        updateForm(stepId);
    });

    const formContainer = document.createElement('div');
    formContainer.style.cssText = 'margin-top: 20px; padding: 20px; border: 1px solid #ccc; border-radius: 4px;';

    function updateForm(stepId: string) {
        formContainer.innerHTML = `
            <h3>Current Step: ${stepId}</h3>
            <p style="color: #666; font-size: 14px;">Fill out the form and click Continue to proceed</p>
            <div id="form-content"></div>
            <button id="continue-btn" style="margin-top: 15px; padding: 10px 20px; background: #007e97; color: white; border: none; border-radius: 4px; cursor: pointer;">
                Continue
            </button>
        `;

        const formContent = formContainer.querySelector('#form-content');
        const continueBtn = formContainer.querySelector('#continue-btn');

        if (stepId === 'personal') {
            formContent!.innerHTML = `
                <label style="display: block; margin: 10px 0;">Name: <input type="text" id="name" value="${formData.name}" style="margin-left: 10px; padding: 5px;" /></label>
                <label style="display: block; margin: 10px 0;">Email: <input type="email" id="email" value="${formData.email}" style="margin-left: 10px; padding: 5px;" /></label>
            `;
        } else if (stepId === 'address') {
            formContent!.innerHTML = `
                <label style="display: block; margin: 10px 0;">Address: <input type="text" id="address" value="${formData.address}" style="margin-left: 10px; padding: 5px; width: 300px;" /></label>
            `;
        } else if (stepId === 'payment') {
            formContent!.innerHTML = `
                <label style="display: block; margin: 10px 0;">Card Number: <input type="text" id="payment" value="${formData.payment}" style="margin-left: 10px; padding: 5px;" /></label>
            `;
        } else if (stepId === 'review') {
            formContent!.innerHTML = `
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Address:</strong> ${formData.address}</p>
                <p><strong>Payment:</strong> ${formData.payment}</p>
            `;
            continueBtn!.textContent = 'Submit';
        }

        continueBtn!.addEventListener('click', () => {
            // Save form data
            const nameInput = formContainer.querySelector('#name') as HTMLInputElement;
            const emailInput = formContainer.querySelector('#email') as HTMLInputElement;
            const addressInput = formContainer.querySelector('#address') as HTMLInputElement;
            const paymentInput = formContainer.querySelector('#payment') as HTMLInputElement;

            if (nameInput) formData.name = nameInput.value;
            if (emailInput) formData.email = emailInput.value;
            if (addressInput) formData.address = addressInput.value;
            if (paymentInput) formData.payment = paymentInput.value;

            // Try to move to next step
            const currentIndex = currentSteps.findIndex(s => s.status === 'current');
            const currentStep = currentSteps[currentIndex];

            const isValid = element.validateStep!(currentStep.id, currentIndex);

            if (!isValid) {
                currentSteps[currentIndex] = {
                    ...currentStep,
                    status: 'error',
                    errorMessage: 'Please fill in all required fields'
                };
                element.steps = [...currentSteps];
            } else {
                const nextStep = currentSteps[currentIndex + 1];
                if (nextStep) {
                    currentSteps[currentIndex] = { ...currentStep, status: 'complete', summary: 'Completed' };
                    currentSteps[currentIndex + 1] = { ...nextStep, status: 'current' };
                    element.steps = [...currentSteps];
                    updateForm(nextStep.id);
                }
            }
        });
    }

    updateForm('personal');

    container.appendChild(element);
    container.appendChild(formContainer);
    return container;
};
