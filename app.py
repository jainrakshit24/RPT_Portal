from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Mock dropdown lists
companies = ["ABC Corporation", "XYZ Limited", "HJI Pvt.Ltd"]
subsidiaries = ["Holding", "Subsidiary", "Wholly Subsidiary", "JV", "As"]
transactions = ["Loan", "Investment", "Payment", "Transfer", "Purchase", "Sale", "Refund", "Tax Payment"]

# ---------------- Home Page ----------------
@app.route("/")
def index():
    return render_template("login.html", companies=companies)


# ---------------- BU Login ----------------
@app.route("/bu_login", methods=["POST"])
def bu_login():
    company = request.form.get("company")
    username = request.form.get("username")
    password = request.form.get("password")

    # Dummy check (later DB/auth add kar sakte ho)
    if username and password:
        return render_template(
            "bu_dashboard.html",
            company=company,
            subsidiaries=subsidiaries,
            transactions=transactions
        )
    return "Invalid BU credentials", 401


# ---------------- BU Dashboard (Transaction submission) ----------------
@app.route("/bu_dashboard", methods=["POST"])
def bu_dashboard():
    subsidiary = request.form.get("subsidiary")
    transaction = request.form.get("transaction")
    amount = request.form.get("amount")

    # For now -> summary page
    return render_template(
        "submitted.html",
        subsidiary=subsidiary,
        transaction=transaction,
        amount=amount
    )


# ---------------- Secretary Login ----------------
@app.route("/secretary_login", methods=["POST"])
def secretary_login():
    username = request.form.get("username")
    password = request.form.get("password")

    if username and password:
        return render_template("secretary_dashboard.html")
    return "Invalid Secretary credentials", 401


if __name__ == "__main__":
    app.run(debug=True)
