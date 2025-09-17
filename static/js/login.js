        let activeTab = 'bu';

        function switchTab(tab) {
            const buTab = document.getElementById('buTab');
            const secretaryTab = document.getElementById('secretaryTab');
            const usernameInput = document.getElementById('username');
            const loginButton = document.getElementById('loginButton');
            const companyGroup = document.getElementById('companyGroup');
            const companySelect = document.getElementById('company');

            // Remove active class from both tabs
            buTab.classList.remove('active');
            secretaryTab.classList.remove('active');

            // Add active class to selected tab
            if (tab === 'bu') {
                buTab.classList.add('active');
                usernameInput.placeholder = 'Enter BU username';
                loginButton.textContent = 'Sign in as BU User';
                companyGroup.style.display = 'block';
                companySelect.required = true;
            } else {
                secretaryTab.classList.add('active');
                usernameInput.placeholder = 'Enter Company Secretary username';
                loginButton.textContent = 'Sign in as Company Secretary';
                companyGroup.style.display = 'none';
                companySelect.required = false;
                companySelect.value = '';
            }

            activeTab = tab;
        }

        function handleLogin(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const company = document.getElementById('company').value;
            
            if (!username || !password) {
                alert('Please enter both username and password');
                return;
            }

            if (activeTab === 'bu' && !company) {
                alert('Please select a company');
                return;
            }

            // Simulate login process
            const loginButton = document.getElementById('loginButton');
            const originalText = loginButton.textContent;
            
            loginButton.textContent = 'Signing in...';
            loginButton.disabled = true;
            
            setTimeout(() => {
                const loginMessage = activeTab === 'bu' 
                    ? `Login successful as BU User: ${username} at ${document.getElementById('company').options[document.getElementById('company').selectedIndex].text}`
                    : `Login successful as Company Secretary: ${username}`;
                
                alert(loginMessage);
                loginButton.textContent = originalText;
                loginButton.disabled = false;
                
                // Reset form
                document.getElementById('loginForm').reset();
            }, 1500);
        }

        // Add some interactive feedback
        document.addEventListener('DOMContentLoaded', function() {
            const inputs = document.querySelectorAll('.form-input');
            
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.style.transform = 'translateY(-1px)';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.style.transform = 'translateY(0)';
                });
            });
        });