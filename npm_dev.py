import subprocess

# Command to start the development server using npm
command = ['npm', 'run', 'dev']

# Executing the command within the project directory
subprocess.run(command, cwd='/app/data/agents/ReactEduGPT-0db4e629/workspace/ml-education-site')