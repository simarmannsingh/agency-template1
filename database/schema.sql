-- Database Schema for bo-UI-template
-- ----------------------------------------------
-- This script contains the SQL commands to create the database schema for an bo-UI-template.
-- The schema includes tables for users, categories, suppliers, inventory transactions, sales, and purchase orders.

-- Create Database
CREATE DATABASE binaryoats;

-- Connect to Database
\c binaryoats;


-- Create Users Table
CREATE TABLE IF NOT EXISTS users (
   is_active       BOOLEAN DEFAULT false,
   reset_password  BOOLEAN DEFAULT false,
   id              VARCHAR(40) PRIMARY KEY NOT NULL,
   first_name      VARCHAR(80) NOT NULL,
   last_name       VARCHAR(80),
   email           VARCHAR(80) NOT NULL,
   token           VARCHAR(80) NOT NULL,
   salt            VARCHAR(256) NOT NULL,
   password_hash   VARCHAR(512) NOT NULL,
   is_admin        BOOLEAN DEFAULT FALSE
);

-- Create Categories Table
CREATE TABLE categories (
    category_id   INT PRIMARY KEY, -- Auto-incremented ID for each category
    name          VARCHAR(255) NOT NULL UNIQUE, -- Name of the category, e.g., Beverages, Snacks
    description   TEXT DEFAULT '' -- Description of the category
);

COMMENT ON TABLE categories IS 'Stores product categories like Beverages, Snacks, Dairy, etc.';
COMMENT ON COLUMN categories.name IS 'Name of the category';
COMMENT ON COLUMN categories.description IS 'Detailed description of the category';

-- Create Suppliers Table
CREATE TABLE suppliers (
    supplier_id    VARCHAR(150) PRIMARY KEY, -- Auto-incremented ID for each supplier
    name           VARCHAR(255) NOT NULL, -- Name of the supplier
    contact_person VARCHAR(255), -- Contact person for the supplier
    phone_number   VARCHAR(255), -- Phone number of the supplier
    email          VARCHAR(255) UNIQUE, -- Email address of the supplier
    address        TEXT -- Physical address of the supplier
);

COMMENT ON TABLE suppliers IS 'Stores supplier details for products';
COMMENT ON COLUMN suppliers.name IS 'Name of the supplier (company or individual)';
COMMENT ON COLUMN suppliers.contact_person IS 'Primary contact person for the supplier';

-- Create Products Table
CREATE TABLE products (
    product_id          VARCHAR(150) PRIMARY KEY, -- UPC or EAN barcode for the product, used as ID
    name                VARCHAR(255) NOT NULL, -- Name of the product, e.g., Coca-Cola 500ml
    brand               VARCHAR(255), -- Name of the Company
    category_id         VARCHAR(150), -- Foreign key referencing Categories table
    unit_of_measure     VARCHAR(150), -- Unit of measurement, e.g., bottle, kg
    price_per_unit      NUMERIC(10, 2), -- Selling price per unit
    cost_per_unit       NUMERIC(10, 2), -- Cost price per unit
    supplier_id         VARCHAR(150), -- Foreign key referencing Suppliers table
    expiration_date     DATE, -- Expiration date for perishable goods
    reorder_threshold   INT DEFAULT 10, -- Minimum stock before reordering
    quantity_in_stock   INT DEFAULT 0, -- Current stock quantity
    original_content    TEXT NOT NULL,  -- original_content
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Creation timestamp
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Update timestamp
    -- FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id) ON DELETE SET NULL
);

COMMENT ON TABLE products IS 'Stores product details including pricing and stock information';
COMMENT ON COLUMN products.name IS 'Name of the product';

-- Create Inventory Transactions Table
CREATE TABLE inventory_transactions (
    transaction_id      SERIAL PRIMARY KEY, -- Auto-incremented ID for each transaction
    product_id          VARCHAR(150) NOT NULL, -- Foreign key referencing Products table
    transaction_type    VARCHAR(20) NOT NULL CHECK (transaction_type IN ('purchase', 'sale', 'waste')), -- Type of transaction
    quantity            INT NOT NULL, -- Quantity of the product involved in the transaction
    timestamp           TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date and time of the transaction
    remarks             TEXT, -- Optional notes about the transaction
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

COMMENT ON TABLE inventory_transactions IS 'Tracks all product movements in inventory';
COMMENT ON COLUMN inventory_transactions.transaction_type IS 'Type of transaction: purchase, sale, or waste';

-- Create Sales Table
CREATE TABLE sales (
    sale_id         SERIAL PRIMARY KEY, -- Auto-incremented ID for each sale
    product_id      VARCHAR(150) NOT NULL, -- Foreign key referencing Products table
    quantity_sold   INT NOT NULL, -- Quantity sold in the transaction
    sale_price      NUMERIC(10, 2) NOT NULL, -- Selling price per unit
    sale_date       TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date and time of the sale
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

COMMENT ON TABLE sales IS 'Stores details of product sales';
COMMENT ON COLUMN sales.sale_price IS 'Selling price per unit at the time of sale';

-- Create Purchase Orders Table
CREATE TABLE purchase_orders (
    purchase_order_id   SERIAL PRIMARY KEY, -- Auto-incremented ID for each order
    supplier_id         VARCHAR(150) NOT NULL, -- Foreign key referencing Suppliers table
    product_id          VARCHAR(150) NOT NULL, -- Foreign key referencing Products table
    quantity_ordered    INT NOT NULL, -- Quantity ordered from the supplier
    order_date          TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date and time the order was placed
    status              VARCHAR(20) DEFAULT 'Pending' CHECK (status IN ('Pending', 'Completed')), -- Order status
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

COMMENT ON TABLE purchase_orders IS 'Tracks purchase orders placed to suppliers';
COMMENT ON COLUMN purchase_orders.status IS 'Status of the order: Pending or Completed';
