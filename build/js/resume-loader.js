/*!
* Resume Template - Enhanced with Partial Loading
* Based on Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

class ResumeLoader {
    constructor() {
        this.partials = [
            { id: 'navigation-container', file: 'partials/navigation.html' },
            { id: 'about-container', file: 'partials/about.html' },
            { id: 'experience-container', file: 'partials/experience.html' },
            { id: 'research-portfolio-container', file: 'partials/research_portfolio.html' },
            { id: 'apps-container', file: 'partials/apps.html' },
            { id: 'education-container', file: 'partials/education.html' },
            { id: 'skills-container', file: 'partials/skills.html' },
            { id: 'interests-container', file: 'partials/interests.html' },
            { id: 'awards-container', file: 'partials/awards.html' }
        ];
    }

    async loadPartial(partial) {
        try {
            const response = await fetch(partial.file);
            if (!response.ok) {
                throw new Error(`Failed to load ${partial.file}: ${response.status}`);
            }
            const content = await response.text();
            const container = document.getElementById(partial.id);
            if (container) {
                container.innerHTML = content;
            }
        } catch (error) {
            console.error(`Error loading partial ${partial.file}:`, error);
            const container = document.getElementById(partial.id);
            if (container) {
                container.innerHTML = `<div class="alert alert-danger">Error loading ${partial.file}</div>`;
            }
        }
    }

    async loadAllPartials() {
        const loadPromises = this.partials.map(partial => this.loadPartial(partial));
        await Promise.all(loadPromises);
    }

    initializeBootstrapComponents() {
        // Activate Bootstrap scrollspy on the main nav element
        const sideNav = document.body.querySelector('#sideNav');
        if (sideNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#sideNav',
                offset: 74,
            });
        }

        // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    }

    showLoadingSpinner() {
        const spinner = document.createElement('div');
        spinner.id = 'loading-spinner';
        spinner.innerHTML = `
            <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        `;
        document.body.appendChild(spinner);
    }

    hideLoadingSpinner() {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            spinner.remove();
        }
    }

    async init() {
        this.showLoadingSpinner();
        await this.loadAllPartials();
        this.initializeBootstrapComponents();
        this.hideLoadingSpinner();
    }
}

// Initialize when DOM is loaded
window.addEventListener('DOMContentLoaded', async () => {
    const resumeLoader = new ResumeLoader();
    await resumeLoader.init();
});
