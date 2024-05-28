from flask import Flask, request, jsonify
from flask_cors import CORS
import socket
import sublist3r

app = Flask(__name__)
CORS(app)

def nslookup(domain):
    try:
        result = socket.gethostbyname(domain)
        return {'result': result}
    except socket.gaierror:
        return {'error': f'The domain {domain} does not exist or could not be resolved.'}

@app.route('/nslookup', methods=['POST'])
def nslookup_route():
    domain = request.json.get('domain')
    if not domain:
        return jsonify({'error': 'No domain provided.'}), 400

    result = nslookup(domain)
    return jsonify(result)

@app.route('/subdomains', methods=['POST'])
def scan_subdomains_route():
    domain = request.json.get('domain')
    if not domain:
        return jsonify({'error': 'No domain provided.'}), 400
    
    print(f"Scanning subdomains for: {domain}")
    subdomains_list = sublist3r.main(domain=domain, threads=10, savefile=None, ports=None, silent=True, verbose=False, enable_bruteforce=False, engines=None)

    print("Found subdomains:")
    for subdomain in subdomains_list:
        print(subdomain)

    return jsonify({'subdomains': subdomains_list}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')