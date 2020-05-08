import React from 'react';
import ThemeToggle from './ThemeToggle';

function App() {
    return (
        <div className="min-h-screen bg-primary p-4 md:p-12 md:pt-4 transition-colors duration-200">
            <div className="mb-4 ml-auto flex justify-end">
                <span className="text-contrast font-bold text-sm mr-3">Switch theme</span>
                <ThemeToggle />
            </div>
            <div className="bg-secondary h-full px-6 md:px-10 py-6 rounded-md shadow-lg transition-colors duration-200">
                <h1 className="text-5xl font-black text-contrast uppercase pb-1 md:pb-0">
                    Some Text
                </h1>
                <p className="text-contrast">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec sapien vel
                    tellus aliquet ultricies. Sed vitae euismod sem, sed sodales risus. Nulla
                    ultricies vitae tellus et consequat. Duis lacinia sem id odio fringilla, quis
                    consectetur nibh euismod. Phasellus id suscipit libero. Nullam at molestie mi.
                    Aenean aliquam tincidunt mauris sed vestibulum. Nullam id mi eu nisl accumsan
                    facilisis at non felis.
                    <br></br>
                    <br></br>
                    Nam rutrum lacinia quam, semper faucibus lorem lobortis sit amet. Suspendisse
                    potenti. Nullam ac lectus iaculis, finibus lectus non, pharetra sapien. Nam sit
                    amet turpis molestie, euismod quam a, pulvinar eros. Etiam quis nisl placerat,
                    dictum ipsum ac, feugiat felis. Ut erat enim, imperdiet eu nibh id, imperdiet
                    semper nibh. Praesent volutpat mollis nibh ac hendrerit. Phasellus pulvinar nec
                    ex in euismod. Vivamus condimentum, ex non vehicula condimentum, dui enim
                    egestas sapien, cursus sodales quam massa vel mauris. Proin tempor vitae sapien
                    eget accumsan. Vestibulum ut diam tempor, molestie libero a, vulputate quam.
                    Nulla ullamcorper posuere consectetur. Praesent fringilla urna eu est iaculis
                    posuere.
                    <br></br>
                    <br></br>
                    Proin tincidunt pretium lorem vel condimentum. Phasellus finibus, turpis nec
                    tempor consequat, sapien nisl rutrum dolor, ultrices auctor eros lectus id
                    risus. Integer metus massa, dignissim ac enim vel, consectetur mollis diam.
                    Pellentesque vitae ultrices risus. Fusce consectetur tincidunt turpis faucibus
                    scelerisque. Phasellus ac consequat lacus. Duis hendrerit lorem nunc, ac
                    elementum orci ornare eget. Mauris quis ipsum ullamcorper, blandit dolor vitae,
                    mollis tellus. In ac commodo nunc, in auctor est. Donec lacus diam, interdum vel
                    odio a, mattis auctor mi.
                </p>
            </div>
        </div>
    );
}

export default App;
